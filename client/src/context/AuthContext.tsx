import React, { createContext, useReducer } from "react";

export const AuthContext = createContext<{ state: any; dispatch: React.Dispatch<any> } | null>(null);

export const authReducer = (state:any, action:any) => {
    switch(action.type) {
        case "LOGIN":
            return {user: action.payload}
        case "LOGOUT":
            return { user: null}
        default:
            return state
    }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    console.log("AuthContext state : ", state)

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}