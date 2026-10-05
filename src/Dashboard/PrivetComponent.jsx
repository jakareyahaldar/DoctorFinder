import { useEffect } from "react"
import { useCookies } from "react-cookie"
import { useDispatch, useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { verifyToken } from "../features/auth_verifyer/auth_verifySlice"

export default function PrivetComponent() {
    const dispatch = useDispatch()
  
    const [ cookies ] = useCookies()
    
    const { admin_token } = cookies

    const { verified, tryed } = useSelector( e => e.authVerifyer )
    if(admin_token  && !tryed ){
        dispatch(verifyToken(admin_token))
    }

    const authIsOK = verified
    
    if(authIsOK) return <Outlet />
    if(!authIsOK) return <Navigate to="/admin-login" />


}
