import { Button } from "@radix-ui/themes";
import "./index.scss"
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h3 className="logo">React-JWT-AUTH</h3>
      <div className="btn-group">
        <Link to={"/login"}><Button>Login</Button></Link>
        <Link to={"/signup"}><Button>Register</Button></Link>
      </div>
    </nav>
  )
}
