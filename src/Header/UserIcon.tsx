import "./UserIcon.css"
import { FaUserCircle } from 'react-icons/fa';
import { useLocation, useNavigate } from "react-router-dom";

function UserIcon(props: {username: string} ) {

    const nav = useNavigate();
    const location = useLocation();

    const handleOnClick = () => {
        if(location.pathname === "/profile")
            return;
        nav("/profile");
    }

    return (
    <div className='User-Container' onClick={handleOnClick}>
        <p className='Username'>{props.username}</p>
        <FaUserCircle className='UserIcon' />
    </div>);
}

export default UserIcon;