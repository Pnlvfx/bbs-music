import React,{ createContext, ReactNode } from "react";

const UserContext = createContext({});

interface UserContextProvider {
    children: ReactNode;
}

export const UserContextProvider = ({children}: UserContextProvider) => {
    return (
        <UserContext.Provider value={{
            
        }}>
            {children}
        </UserContext.Provider>
    )
}