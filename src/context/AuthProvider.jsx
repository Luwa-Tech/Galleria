import { createContext } from "react"
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebase"
import {useState, useEffect} from "react"

export const authContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({})

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const userStateChange = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser)
            setUser(currentUser)
        })
        return () => {
            userStateChange()
        }
    }, [])

    return (
        <authContext.Provider value={{signInUser, user, signOutUser}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider