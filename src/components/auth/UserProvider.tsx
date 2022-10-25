import AsyncStorage from "@react-native-async-storage/async-storage";
import React,{ createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";

interface UserContextProps {
    session: SessionProps | null;
    setSession: Dispatch<SetStateAction<SessionProps | null>>;
    isLoading: boolean;
}

const UserContext = createContext<UserContextProps | {}>({});

interface UserContextProvider {
    children: ReactNode;
}

export const UserContextProvider = ({ children}: UserContextProvider) => {
    const [session, setSession] = useState<SessionProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (session) return;
        const getUser = async () => {
            try {
                console.log((await AsyncStorage.getItem('session')))
                let userInfo = await AsyncStorage.getItem('session');
                if (!userInfo) {
                    setSession(null);
                } else {
                    setSession(JSON.parse(userInfo));
                }
                setIsLoading(false);
            } catch (err) {
                console.log(err);
                setIsLoading(false);
            }
        }
        getUser();
    }, [session])

    return (
        <UserContext.Provider value={{
            session,
            setSession,
            isLoading
        }}>
            {children}
        </UserContext.Provider>
    )
}

export const useSession = () => {
    const context = useContext(UserContext) as UserContextProps;
    if (!context) {
        throw new Error(
        'Session component must be used with UserContextProvider component',
        );
    }
    return context;
}