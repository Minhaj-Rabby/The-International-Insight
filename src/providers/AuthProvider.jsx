import React from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const[loading,setLoading] = useState(true);

    // console.log(user);

    const createUser=(email,pasword)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, pasword);
    }
    const signIn=(email,pasword)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, pasword);
    }
    const profileUpdate=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggeduser=>{
            setUser(loggeduser);
            setLoading(false);
        })

        return ()=>{
            unsubscribe();
        }
    },[]);


    const authInfo = {
        user,
        createUser,
        signIn,
        profileUpdate,
        logOut,
        loading,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider