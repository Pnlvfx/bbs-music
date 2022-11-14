import AsyncStorage from "@react-native-async-storage/async-storage";
import NetInfo from "@react-native-community/netinfo";
import React,{ createContext, Dispatch, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { catchError } from "../../config/common";
import { BASE_URL } from "../../config/config";

interface UserContextProps {
    session: SessionProps | null;
    setSession: Dispatch<SetStateAction<SessionProps | null>>;
    isLoading: boolean;
    revalidateSession: () => Promise<void>
}

const UserContext = createContext<UserContextProps | {}>({});

interface UserContextProvider {
    children: ReactNode;
}

export const UserContextProvider = ({ children}: UserContextProvider) => {
    const [isConnected, setIsConnected] = useState<boolean | null>(null);
    const [session, setSession] = useState<SessionProps | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getNetInfo = NetInfo.addEventListener((state) => {
            if (state.isConnected === null) {
                setIsConnected(false);
            } else {
                setIsConnected(state.isConnected);
            }
        });
        getNetInfo();
    }, []);

    const revalidateSession = async () => {
        try {
            const url = `${BASE_URL}/user`;
            const res = await fetch(url, {
                method: 'GET',
                credentials: 'include'
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data?.msg);
            if (!data.user) {
                await AsyncStorage.removeItem('session');
            } else {
                await AsyncStorage.setItem('session', JSON.stringify(data));
            }
            const newUserInfo = await AsyncStorage.getItem('session');
            if (!newUserInfo) {
                setSession(null);
            } else {
                const json = JSON.parse(newUserInfo);
                json.user.is_connected = isConnected;
                setSession(json);
            }
        } catch (err) {
            throw catchError(err);
        }
    }

    useEffect(() => {
        if (session) return;
        if (isConnected === null) return;
        const getUser = async () => {
            try {
                const userInfo = await AsyncStorage.getItem('session');
                if (!userInfo) {
                    setSession(null);
                } else {
                    const json = JSON.parse(userInfo);
                    json.user.is_connected = isConnected;
                    setSession(json);
                }
                setIsLoading(false);
                if (isConnected) {
                    await revalidateSession();
                }
            } catch (err) {
                setIsLoading(false);
            }
        }
        getUser();
    }, [session, isConnected])

    return (
        <UserContext.Provider value={{
            session,
            setSession,
            isLoading,
            revalidateSession
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