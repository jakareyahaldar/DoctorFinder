import { Navigate, Outlet } from "react-router-dom"

export default function PrivetComponent() {
  

    const authIsOK = true
    
    if(authIsOK) return <Outlet />
    if(!authIsOK) return <Navigate to="/admin-login" />


}
