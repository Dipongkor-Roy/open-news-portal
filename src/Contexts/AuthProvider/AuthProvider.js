import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config' 
export const AuthContext=createContext();


const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true);
 
    const logInProvider=(provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInViaPass=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        });
        return ()=> unSubscribe();
    },[])
    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo={user,loading,logInProvider,logOut,createUser,logInViaPass};

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider; 