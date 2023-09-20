import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"

const Gallery = () => {
    const {user, signOutUser} = useAuth()
    const navigate = useNavigate()

    const logout = () => {
        signOutUser()
        navigate("/")
    }
    return (
        <main>
            <h1>user: {user?.email}</h1>
            <button onClick={logout}>logout</button>
        </main>
    )
}

export default Gallery