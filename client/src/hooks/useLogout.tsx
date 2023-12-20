import { useAuth } from './useAuth'

export default function useLogout() {
   const {dispatch} = useAuth()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem("user")
        //dispatch logout action
        dispatch({type:"LOGOUT"})
    }
  return {logout};
}
