import useAuth from "../hooks/useAuth"
import { Outlet } from "react-router-dom"
import { Navigate} from "react-router-dom"

const RequireAuth = () => {
    const {user} = useAuth()
    
    return (
        user?.email ? <Outlet /> : <Navigate to="/"/>
    )
}

export default RequireAuth