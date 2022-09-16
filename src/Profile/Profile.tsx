import './Profile.css';
import ProfileHistory from "./ProfileHistory"
import Logout from "./Logout"
import { getUser } from './fetchTranslations';

import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { storageRead, storageSave } from '../Storage/Storage';
import { STORAGE_KEY_USER } from '../Storage/storageKeys';
import { useNavigate } from "react-router-dom";
import { debug } from 'console';
import withAuth from '../Auth/withAuth';

//10 last translation for current user
//Only need to display the text
//Button to clear the translations(delete from browser local storage)
//Return 
function  Profile() {
    
    //If context.user = null
    const [user, setUser] = useContext(UserContext);


    //storageSave('translate-user', 'mrbeta');

    const [userLocal] = useState(storageRead(STORAGE_KEY_USER));
    const navigate = useNavigate();

    //debugger

    //console.log("run" + user.name);
    //= useContext(UserContext);

    // useEffect(() => { 
    //     (async function fetchData(){

    //     const [error, data] = (user==null) ? await getTranslations(userLocal) : [null];

    //         if(data === null){
    //             navigate("/");
    //         }else{
    //             setUser(data)
            
    //         console.log("state" + data.username)
    //         }
    //     }
    //     )()
    //  },[]) 
    


    

    return (
    <>

        <Logout></Logout>
        <ProfileHistory></ProfileHistory>
    </>)
}
export default withAuth(Profile);