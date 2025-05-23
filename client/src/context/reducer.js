import { ADD_COMMENT, CLEAR_ALERT, GET_ALL_LINX_POSTS, GET_ALL_POSTS, GET_MY_POSTS, GET_NOTIFICATIONS, LOGOUT, SETUP_USER_BEGINS, SETUP_USER_ERROR, SETUP_USER_SUCCESS, SHOW_ALERT, START_LOADING, STOP_LOADING, TOGGLE_LIKE, TOGGLE_LINX_DISLIKE, SAVE_LINX_POST, TOGGLE_SIDEBAR, UPDATE_PROFILE } from "./types"
import { initialState } from "./appContext"

export const reducer = (state, action) =>{

    switch(action.type){
        case SHOW_ALERT : 
            return {
                ...state,
                alertText : action.payload.alert,
                alertType : action.payload.type,
                showAlert : true
            }
        case CLEAR_ALERT : 
            return {
                ...state,
                showAlert : false,
                alertText : "",
                alertType : "",
            }
        case SETUP_USER_BEGINS:
            return{
                ...state,
                isLoading : true
            }
        case SETUP_USER_SUCCESS:
            
            return {
                ...state,
                user : action.payload.user,
                token : action.payload.token,
                isLoading:false
            }
        case SETUP_USER_ERROR:
            return{
                ...state,
                isLoading:false
            }

        case LOGOUT :
            return{
                ...initialState,
                user : null,
                token : null,
                userLocation: null,
                jobLocation : null,

            }
        case TOGGLE_SIDEBAR:
            return{
                ...state,
                showSidebar : !state.showSidebar
            }
        case GET_ALL_POSTS:
            
            return{
                ...state,
                posts : action.payload.posts
            }
        case GET_ALL_LINX_POSTS:
            
            return{
                ...state,
                linXPosts : action.payload.linXPosts
            }
        case GET_MY_POSTS:
            return{
                ...state,
                myPosts : action.payload.myPosts
            }
        case START_LOADING:
            return {
                ...state,
                isLoading : true
            }
        case TOGGLE_LIKE:
            let posts = state.posts;
            posts.map(post=>{
                if(post._id === action.payload.postId){
                    if(action.payload.isLiked){
                        console.log("liking the post");

                        post.likes.push(state.user._id);
                    }
                    else{
                        console.log("disliking the post");
                        post.likes = post.likes.filter(id=> id!=state.user._id);
                    }
                    
                }
                return post;
            })

            
            return {
                ...state,
                posts : posts
            }
        case TOGGLE_LINX_DISLIKE:
            const dislikedPosts = JSON.parse(localStorage.getItem('dislikedPosts')) || [];
            if (dislikedPosts.includes(action.payload.postId)) {
                // Remove from disliked posts if already disliked
                dislikedPosts.splice(dislikedPosts.indexOf(action.payload.postId), 1);
                localStorage.setItem('dislikedPosts', JSON.stringify(dislikedPosts));
              } else {
                // Add to disliked posts if not already disliked
                dislikedPosts.push(action.payload.postId);
                localStorage.setItem('dislikedPosts', JSON.stringify(dislikedPosts));
              }
            let linXPostsD = state.posts;
            linXPostsD.map(post=>{
                if(post._id === action.payload.postId){
                    if(action.payload.isLiked){
                        console.log("liking the post");

                        post.dislikes = post.dislikes+1;
                    }
                    else{
                        console.log("disliking the post");
                        post.dislikes = post.dislikes-1;
                    }
                    
                }
                return post;
            })

            
            return {
                ...state,
                linXPosts : linXPostsD
            }
        case SAVE_LINX_POST:
            let updatedPosts = [];
            if(action.payload.isNew){
                updatedPosts = [action.payload.savedPost, ...state.linXPosts,];
            }
            else{
                updatedPosts = state.linXPosts.map(post => {
                    if(post?._id == action.payload.savedPost?.id) return action.payload.savedPost;

                    return post;
                }
            )
            }
            

            return {
                ...state,
                linXPosts : updatedPosts
            }
            
        case ADD_COMMENT:
            const {postId, post} = action.payload;

            let allPosts = state.posts;
            const postIdx = allPosts.findIndex(post=> post._id === postId);

            allPosts[postIdx] = post
            

            console.log(allPosts);
            return {
                ...state,
                posts: allPosts
            }

        case GET_NOTIFICATIONS:
            return{
                ...state,
                notifications : action.payload.notifications
            }
        case STOP_LOADING:
            return {
                ...state,
                isLoading : false
            }
        case UPDATE_PROFILE :
            return{
                ...state,
                user :action.payload.user
            }
        
        default :
        return state;
    
    }
}
