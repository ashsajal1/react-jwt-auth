import { useState } from "react";
import { useAuth } from "./useAuth";


export const useSignup = () => {
    const [error, setError] = useState<null | boolean>(null)
    const [isLoading, setIsLoading] = useState(false)
    const { dispatch } = useAuth()

    const signup = async (email: string, password: string) => {
        setIsLoading(true)
        setError(null)

        const response = await fetch("http://localhost:4000/api/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })

        const json = await response.json()

        if (!response.ok) {
            setIsLoading(false)
            setError(json.error)
        } else {
            localStorage.setItem("user", JSON.stringify(json))

            //update auth context
            dispatch({ type: "LOGIN", payload: json })

            setIsLoading(false)
        }
    }

    return { signup, isLoading, error };
}