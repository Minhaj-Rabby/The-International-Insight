import React from 'react'
import { AuthContext } from '../providers/AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
        return children;
    }
    else
        return <Navigate state={{from:location}} to='/login' replace></Navigate>;
}

export default PrivateRoutes