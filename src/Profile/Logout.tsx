import { useState, useEffect } from "react";
import { storageDelete } from '../Storage/Storage';
import { useNavigate } from "react-router-dom";

//This should clear cache and redirect






const Logout = ()=>{
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    setLoading(true);
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