import { createContext, useContext, useReducer} from "react";
import { reducer } from "./reducer";
import { CLEAR_ALERT, SHOW_ALERT,  SETUP_USER_BEGINS, SETUP_USER_SUCCESS, SETUP_USER_ERROR, LOGOUT, TOGGLE_SIDEBAR } from "./types";

import axios from "axios";


export const AppContext = createContext();


const user = JSON.parse(localStorage.getItem('user'));
const token = localStorage.getItem('token');


export const initialState = {
    user : user ? user : null,
    token : token ? token : null,
    userLocation : user? user.location: null,
    isLoading :false,
    showAlert : false,
    alertText : "",
    alertType : "",
    jobLocation: user? user.location: null,
    showSidebar : false
}



 const AppProvider = ({children}) => {


    const [state, dispatch] = useReducer(reducer, initialState);

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
            const res = await axios.post(`/api/v1/auth/${action}`, currentUser);
            console.log(res);
            const {user, token} =  res.data;
            dispatch({type : SETUP_USER_SUCCESS, payload : {user, token}});
            displayAlert(`successfully ${action}. Redirecting ....`, "success");

            addUsertoLocalStorage({user, token});
    

        } catch (error) {
            displayAlert( error.response.data.msg, "danger");
            dispatch({type : SETUP_USER_ERROR});
            console.log(`${action} failed`);
        }

        
    }




    // add user to localstorage
    const addUsertoLocalStorage = ({user, token}) =>{
        localStorage.setItem("user", JSON.stringify(user));
        localStorage.setItem("token", token);
        localStorage.setItem("location", user.location);
    }

    
    // remove user from the local storage

    const removeUserFromLocalStorage = () =>{
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        localStorage.removeItem("location");
    }

    const logoutUser = ()=>{
        removeUserFromLocalStorage();
        dispatch({type:LOGOUT});
        
    }


    const toggleSidebar = ()=>{
        dispatch({type:TOGGLE_SIDEBAR});
    }




  return (
    <AppContext.Provider 
        value={{
            ...state,
            displayAlert,
            setupUser,
            logoutUser,
            toggleSidebar
            

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