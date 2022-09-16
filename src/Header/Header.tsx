import { useContext } from "react";
import { UserContext } from "../Context/UserContext";
import "./Header.css"
import UserIcon from "./UserIcon";

function Header() {
    const [user,] = useContext(UserContext);
    return (
    <div className="Header">
        <h1>Lost in Translation</h1>
        {user && <UserIcon username={user.name} />}
    </div>)
}

export default Header;