import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { storageDelete } from "../Storage/Storage";
//This should clear cache and redirect

const Logout = ()=>{
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);


  const handleLogoutClick = () => {
    setLoading(true);
    setUser(null);
    storageDelete();
    navigate("/"); //Go back to login
    setLoading(false);
  };

  
  return (
    <> 
      <button onClick={handleLogoutClick} disabled = {loading}>
        Logout
      </button>
    </>
)};


export default  Logout;