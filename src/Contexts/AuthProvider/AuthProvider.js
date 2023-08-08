import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config' 
export const AuthContext=createContext();


const auth=getAuth(app);


const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
 
    const logInProvider=(provider)=>{
        return signInWithPopup(auth, provider);
    }

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logInViaPass=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        });
        return ()=> unSubscribe();
    },[])
    const logOut=()=>{
        return signOut(auth);
    }
    const authInfo={user,logInProvider,logOut,createUser,logInViaPass};

    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider; 