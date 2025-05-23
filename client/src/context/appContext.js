import { createContext, useContext, useReducer} from "react";
import { reducer } from "./reducer";
import { CLEAR_ALERT, SHOW_ALERT,  SETUP_USER_BEGINS, SETUP_USER_SUCCESS, SETUP_USER_ERROR, LOGOUT, TOGGLE_SIDEBAR, GET_ALL_POSTS, GET_MY_POSTS, START_LOADING, STOP_LOADING, UPDATE_PROFILE, TOGGLE_LIKE, ADD_COMMENT, GET_NOTIFICATIONS, GET_ALL_LINX_POSTS, SAVE_LINX_POST, TOGGLE_LINX_DISLIKE } from "./types";

import axios from "axios";
import { track } from "../usage-tracking";


export const AppContext = createContext();



const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');

const isSuperAdmin = localStorage.getItem("isSuperAdmin") == "true" || process.env.REACT_APP_SUPER_ADMIN =="true" ;
export const initialState = {
    user : user ? user : null,
    token : token ? token : null,
    isLoading :false,
    showAlert : false,
    alertText : "",
    alertType : "",
    showSidebar : false,
    isSuperAdmin: isSuperAdmin,
    posts :[],
    linXPosts: [],
    notifications :[],
}



 const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";




    axios.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;

    const displayAlert = (alert, type) =>{
        dispatch({type : SHOW_ALERT, payload : {alert, type}});

        setTimeout(() => {
            clearAlert();
        }, 3000);
    }

    const   clearAlert = () =>{
        dispatch({type : CLEAR_ALERT});
    }



    const setupUser = async(currentUser, action) =>{
        dispatch({type : SETUP_USER_BEGINS});
        try {
            
            const res = await axios.post(`${BASE_URL}/api/v1/auth/${action}`, currentUser);
            console.log(res);
            const {user, token} =  res.data;
            dispatch({type : SETUP_USER_SUCCESS, payload : {user, token}});
            displayAlert(`successfully ${action}. Redirecting ....`, "success");

            addUsertoLocalStorage({user, token});
    

        } catch (error) {
            console.log(error);
            console.log(`${action} failed`);
            displayAlert( error.response.data.msg, "error");
            dispatch({type : SETUP_USER_ERROR});
           
        }

        
    }




    // add user to localstorage
    const addUsertoLocalStorage = ({user, token}) =>{
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
  
    }

    
    // remove user from the local storage

    const removeUserFromLocalStorage = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    }

    const logoutUser = ()=>{
        removeUserFromLocalStorage();
        dispatch({type:LOGOUT});
        
    }


    const toggleSidebar = ()=>{
        dispatch({type:TOGGLE_SIDEBAR});
    }

    const loadAllPosts = async () => {
   
        try {
        startLoading();
        const res  = await axios.get(`${BASE_URL}/api/v1/post`);
        let data  = res.data.posts

        dispatch({type: GET_ALL_POSTS, payload : {posts : data}})

        stopLoading();
            
        } catch (error) {
            console.log(error);
        }
        
    }
    const loadAllLinXPosts = async () => {
        track("Started loading posts")
        try {
        startLoading();
        const res  = await axios.get(`${BASE_URL}/api/v1/post/linx`);
        let data  = res.data.posts

        dispatch({type: GET_ALL_LINX_POSTS, payload : {linXPosts : data}})
        
        track("Loaded all posts")
        stopLoading();
            
        } catch (error) {
            console.log(error);
        }
        
    }

    const loadMyPosts = async () => {
   
        // try {
        // const res  = await axios.get('/api/v1/post');
        // const data  = res.data.Posts
        // dispatch({type: GET_MY_POSTS, payload : {myPosts : data}})
            
        // } catch (error) {
        //     console.log(error);
        // }
        
    }

    const startLoading = () =>{
        dispatch({type: START_LOADING});
    }

    const stopLoading = () =>{
        dispatch({type: STOP_LOADING});
    }

    const newPost = async(currentPost)=>{
        startLoading();
        try {
            const res  = await axios.post(`${BASE_URL}/api/v1/post`, currentPost);
            displayAlert("Successfully Posted", "success")
            console.log(res);
            stopLoading();
        } catch (error) {
            displayAlert("Some Error occurred", "error")
            console.log(error);
            stopLoading();
        }
    }

    const updateProfile = async(currentUser)=>{
        startLoading();
        try {
            const res  = await axios.patch(`${BASE_URL}/api/v1/auth/updateUser`, currentUser);

            dispatch({type:UPDATE_PROFILE, payload: {user: res.data.user}})
            displayAlert("Successfully updated", "success")
            localStorage.setItem('user', JSON.stringify(res.data.user));
            
            stopLoading();
        } catch (error) {
            displayAlert("Some Error occurred", "error")
            console.log(error); 
            stopLoading();
        }
    }

    const toggleLike = async(postId)=>{
        try {
            const res  = await axios.post(`${BASE_URL}/api/v1/post/${postId}/like`);

            // console.log(res);
            dispatch({type:TOGGLE_LIKE, payload: {postId, isLiked : res.data.isLiked}})

        } catch (error) {
            displayAlert("Some Error occurred : Unable to like the post", "error")
            console.log(error); 
            
        }
    }

    const toggleLinXLike = async(postId)=>{
        track("click liked", {postId})
        try {

            let likedPosts = JSON.parse(localStorage.getItem('likedPosts')) || [];
            let delta = 0;
            if (likedPosts.includes(postId)) {
                likedPosts = likedPosts.filter(loopPostId => loopPostId != postId );
                delta = -1;
            } else {
                likedPosts.push(postId);
                delta = 1;
            }
            localStorage.setItem('likedPosts', JSON.stringify(likedPosts));


            let linXPosts = state.linXPosts;
            let post = linXPosts.filter(post=>post._id === postId)[0];
            if(post.likes === undefined){
                post.likes = 0;
            }
            
            post.likes = Math.max(post.likes + delta, 0);

            await saveLinXPost(post);
            

        } catch (error) {
            displayAlert("Some Error occurred : Unable to like the post", "error")
            console.log(error); 
        }
    }

    const saveLinXPost = async (post) =>{
        const isNew  = post?._id ? false: true;
        const res  = await axios.post(`${BASE_URL}/api/v1/post/linx`, post).catch(() => track("Error saving the post"));

        
        dispatch({type:SAVE_LINX_POST, payload: {savedPost: res.data.savedPost, isNew}});
    }



    const toggleLinXDislike = async(postId)=>{
        try {
            // const res  = await axios.post(`${BASE_URL}/api/v1/post/linx/${postId}/like`);

            // console.log(res);
            dispatch({type:TOGGLE_LINX_DISLIKE, payload: {postId}})

        } catch (error) {
            displayAlert("Some Error occurred : Unable to like the post", "error")
            console.log(error); 
            
        }
    }

    const postComment = async(commentMessage, postId, level)=>{

        startLoading();
        const newComment={
            commentMessage, 
            level:1
        }
        try {
        const res  = await axios.post(`${BASE_URL}/api/v1/post/${postId}/comment`, newComment);
        console.log(res.data);
        dispatch({type: ADD_COMMENT, payload : {postId, post: res.data.post}});
        stopLoading();
        } catch (error) {
            displayAlert("Some Error occurred : Unable to comment on the post", "error")
            console.log(error); 
            stopLoading();
        }


    }

    const getNotifications = async()=>{
        try {
            startLoading();
            const res  = await axios.get(`${BASE_URL}/api/v1/notification`);
            console.log(res.data);
            dispatch({type: GET_NOTIFICATIONS, payload : {notifications : res.data.notifications}})
            stopLoading();
            } catch (error) {
                
                console.log(error);
            }
    }



  return (
    <AppContext.Provider 
        value={{
            ...state,
            displayAlert,
            setupUser,
            logoutUser,
            toggleSidebar,
            loadAllPosts,
            loadAllLinXPosts,
            loadMyPosts,
            toggleLike,
            saveLinXPost,
            toggleLinXLike,
            toggleLinXDislike,
            newPost,
            updateProfile,
            postComment,
            getNotifications,
        }}
    >
        {children}
    </AppContext.Provider>
  )
}

export const  useAppcontext = ()=>{
    return useContext(AppContext);
}


export { AppProvider};