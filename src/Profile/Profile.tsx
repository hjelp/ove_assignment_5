import './Profile.css';
import ProfileHistory from "./ProfileHistory"
import Logout from "./Logout"
import  getUserById  from '../API/getUserById';
import { useState, useEffect, useContext } from "react";
import { UserContext } from "../Context/UserContext";
import { storageDelete, storageRead, storageSave } from '../Storage/Storage';
import { STORAGE_KEY_USER } from '../Storage/storageKeys';
import { useNavigate } from "react-router-dom";
import { debug } from 'console';
import withAuth from '../Auth/withAuth';
import ProfileInfo from './ProfileInfo';

//10 last translation for current user
//Only need to display the text
//Button to clear the translations(delete from browser local storage)
//Return 
function  Profile() {
    const [user, setUser] = useContext(UserContext);
    var uname = "";
    var translations: string[] = [];
    const navigate = useNavigate();

    if(user!==null){ 
        uname = user.username;
        translations = user.translations;
    }

    //debugger
    return (
    <>
        <ProfileInfo uname={uname}></ProfileInfo>
        <ProfileHistory translations={translations}></ProfileHistory>
        <Logout></Logout>
    </>)
}
export default withAuth(Profile);