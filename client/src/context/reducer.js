import { CLEAR_ALERT, LOGOUT, SETUP_USER_BEGINS, SETUP_USER_ERROR, SETUP_USER_SUCCESS, SHOW_ALERT, TOGGLE_SIDEBAR } from "./types"
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
        default :
        return state;
    
    }
}
