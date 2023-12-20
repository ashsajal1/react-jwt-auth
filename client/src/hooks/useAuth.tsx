import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuth = () => {
    const authContext = useContext(AuthContext);

    if(!authContext) {
        throw Error("useAuth must be inside of AuthProvider.")
    }

    return authContext
}