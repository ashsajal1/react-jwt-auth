import { useState } from "react";
import { useAuth } from "./useAuth";


export const useLogin = () => {
    const [error, setError] = useState<null | boolean>(null)
    const [isLoading, setIsLoading] = useState(false)
    const {dispatch} = useAuth()

    const login = async (email:string, password:string) => {
        setIsLoading(true)
        setError(null)
        
        const response = await fetch("/api/user/login", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify({email, password})
        })

        const json = await response.json()

        if(!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem("user", JSON.stringify(json))

            //update auth context
            dispatch({type: "LOGIN", payload: json})

            setIsLoading(false)
        }
    }

    return {login, isLoading, error};
}