import { CLEAR_ALERT, GET_ALL_POSTS, GET_MY_POSTS, LOGOUT, SETUP_USER_BEGINS, SETUP_USER_ERROR, SETUP_USER_SUCCESS, SHOW_ALERT, START_LOADING, STOP_LOADING, TOGGLE_SIDEBAR, UPDATE_PROFILE } from "./types"
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
            localStorage.setItem('user', JSON.stringify(action.payload.token));
            return {
                ...state,
                user : action.payload.user,
                token : action.payload.token,
                userLocation: action.payload.user.location,
                jobLocation : action.payload.user.location,
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
                allPosts : action.payload.allPosts
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
