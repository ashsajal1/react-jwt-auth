import { Button } from "@radix-ui/themes";
import "./index.scss"
import { Link } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import { useAuth } from "../../hooks/useAuth";

export default function Navbar() {
  const { logout } = useLogout();
  const handleLogout = () => {
    logout()
  }

  const { state } = useAuth();
  console.log(state?.user)

  return (
    <nav className="navbar">
      <h3 className="logo">React-JWT-AUTH</h3>
      <div className="btn-group">

        {state?.user ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <div className="btn-group">
            <Link to={"/login"}><Button>Login</Button></Link>
            <Link to={"/signup"}><Button>Register</Button></Link>
          </div>
        )}
      </div>
    </nav>
  )
}
