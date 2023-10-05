import React from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('anik');

    // console.log(user);

    const createUser=(email,pasword)=>{
        return createUserWithEmailAndPassword(auth, email, pasword);
    }
    const signIn=(email,pasword)=>{
        return signInWithEmailAndPassword(auth, email, pasword);
    }
    const profileUpdate=(name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    const logOut=()=>{
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,loggeduser=>{
            setUser(loggeduser);
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
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider