import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'

export default function AuthLayout({ children }: { children: JSX.Element }): JSX.Element {
    const { state } = useAuth();

    console.log(state.user)

    if (!state.user) {
        return (<Navigate to="/login" />)
    }

    return children
}
