import {
    createBrowserRouter,
} from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import SignUp from "./pages/SignUp";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "dashboard",
        element: <Dashboard />,
    },
    {
        path: "signup",
        element: <SignUp />,
    },
]);