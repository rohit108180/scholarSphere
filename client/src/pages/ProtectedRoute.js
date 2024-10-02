import { Navigate } from "react-router-dom";
import { useAppcontext } from "../context/appContext"


export const ProtectedRoute = ({children}) => {
    const {user} = useAppcontext();
    if(!user){
        return <Navigate to="/register"/>
    }
  return (
    children
  )
}
