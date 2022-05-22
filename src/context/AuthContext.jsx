import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children, openPage },) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const login = (email, password) => {
        if(email!=='test@mail.ru'|| password!=='123'){
            return
        }

        return setIsLoggedIn(true);
    }

    const logout = () => {
        return setIsLoggedIn(false);
    }
    useEffect(() => {

        isLoggedIn ? openPage('mapPage') : openPage('login')

        console.log(isLoggedIn)

    }, [isLoggedIn])


    return <AuthContext.Provider value={{
        isLoggedIn,
        login,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}