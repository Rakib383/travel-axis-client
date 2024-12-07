
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
      return  createUserWithEmailAndPassword(auth,email,password)
    }
    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser,updateData)

    }
    const signInWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    const userLogin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        setUser,
        user,
        updateUserProfile,
        signInWithGoogle,
        userLogin,
        logOut
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser)
        })

        return () => {
            unSubscribe()
        }
    },[])
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}
