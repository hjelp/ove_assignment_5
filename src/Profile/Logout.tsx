import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { storageDelete, storageSave } from "../Storage/Storage";
import { STORAGE_KEY_USER } from "../Storage/storageKeys";
//This should clear cache and redirect

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [user, setUser] = useContext(UserContext);


  const handleLogoutClick = () => {
    if(window.confirm('Are you sure?')){
      storageDelete(STORAGE_KEY_USER);
      setUser(null);
    }
  };

  
  return (
    <> 
      <button onClick={handleLogoutClick} disabled = {loading}>
        Logout
      </button>
    </>
)};


export default  Logout;