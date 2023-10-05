import React from 'react'
import { createContext } from 'react'
import app from '../firebase/firebase.config';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('');

    // const user= {};

    const authInfo = {
        user,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider