import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.init";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null)

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signInUser = (email,password) => {
        return signInWithEmailAndPassword(auth, email ,password)
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            console.log('hello' , currentUser)
        });
        return ()=> {
            unSubscribe()
        }
    },[]);

    const authInfo = { user, createUser , signInUser  }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;