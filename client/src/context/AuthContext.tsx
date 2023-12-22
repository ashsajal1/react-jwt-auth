import React, { createContext, useReducer, Dispatch, useEffect } from "react";

interface AuthState {
    user: any; // Update the type according to your user object structure
}

interface AuthContextType {
    state: AuthState;
    dispatch: Dispatch<any>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const authReducer = (state: AuthState, action: { type: string; payload?: any }) => {
    switch (action.type) {
        case "LOGIN":
            return { user: action.payload }
        case "LOGOUT":
            return { user: null }
        default:
            return state
    }
}

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(authReducer, {
        user: null
    })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user") as string);
        if (user) {
            dispatch({type:"LOGIN", payload: user })
        }
    }, [])

    console.log("AuthContext state : ", state)

    return (
        <AuthContext.Provider value={{ state, dispatch }}>
            {children}
        </AuthContext.Provider>
    )
}