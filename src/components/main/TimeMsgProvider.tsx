import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

interface messageProps {
    value: string
    status?: 'error' | 'success'
    time?: number
}

interface TimeMsgContextProvider {
    children: ReactNode
}

export interface TimeMsgContextProps {
    message: messageProps
    setMessage: Dispatch<SetStateAction<messageProps>>
}

const TimeMsgContext = createContext<TimeMsgContextProps | {}>({});



export const TimeMsgContextProvider = ({children}: TimeMsgContextProvider) => {
    const _status = {
        value: '',
        status:'',
        time: 8000,
    }
     const [message, setMessage] = useState(_status);
    return (
        <TimeMsgContext.Provider value={{
            message,
            setMessage
        }}>
            {children}
        </TimeMsgContext.Provider>
    )
}

export const useMessage = () => {
    const context = useContext(TimeMsgContext) as TimeMsgContextProps;
    if (!context) {
        throw new Error(
        'TimeMsg component must be used with TimeMsgProvider component',
        );
    }
    return context;
}