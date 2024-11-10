import React, { createContext, useState, useEffect } from 'react';
import { BACKEND_URI } from '../utils';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await fetch(`${BACKEND_URI}auth/checkAuth`, {
                    credentials: 'include',
                });
                const data = await response.json();
                setIsAuth(data.isAuthenticated);
            } catch (error) {
                console.error("Error checking authentication", error);
            }
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth }}>
            {children}
        </AuthContext.Provider>
    );
};
