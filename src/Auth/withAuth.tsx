import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { getUser } from "../API/getUser";
import { storageRead, storageSave } from "../Storage/Storage";
import { STORAGE_KEY_USER } from "../Storage/storageKeys";


//Closure
const withAuth  = (Component: any) => (props: JSX.IntrinsicAttributes) => {
  const [user, setUser] = useContext(UserContext);
  //storageSave('translate-user', '1');
  if(user !== null){
    return <Component {...props} />
  } else{
    //If there is no user in context, check if it is in local storage
    const [userLocal] = useState(storageRead(STORAGE_KEY_USER));
    //debugger

    //If there is something in local storage check if they are in database
    if(userLocal !== null){
      (async function fetchData(){
        const [error, data] = await getUser(userLocal)
        debugger
        if(error == null){
          setUser(data)
          
        }
      }
      )()
      return <Component {...props} />
    }else{
      debugger
      return <Navigate to="/" />
    }
  }
 
} 

export default withAuth