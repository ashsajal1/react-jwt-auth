import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import AuthLayout from "./layout/AuthLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "dashboard",
                element: <AuthLayout><Dashboard /></AuthLayout>,
            },
            {
                path: "/posts",
                element:<AuthLayout><Posts /></AuthLayout>,
            },
        ]
    },

]);