import ProfileHistoryItem from "./ProfileHistoryItem"
import { UserContext } from "../Context/UserContext";
import { useState, useEffect, useContext } from "react";
import { deleteTranslation } from "../API/deleteTranslation";

//STATE
//var translations: string[] = [];

const ProfileHistory = (props: { translations: string[] }) =>  {
  const [user, setUser] = useContext(UserContext);

  const handleProfileHistoryDeleteClick =  () => {
    if(user!=null){
      (async function fetchData(){
        //ToDO replace this test deletion
        //translations.text.splice(0, 1); Splice can delete one

        const [error, newUser] = await deleteTranslation(user.id, []);
        if(newUser !== null){
          setUser(newUser);
        }else{
          throw Error(error);
        }
      })()
    }
  }

  return (
  <section>
      <h4>Your translation history</h4>
      <ul>
        {
          props.translations.map((t, index) =><ProfileHistoryItem text={t} key={index + "-" + t}/>)
        }
      </ul>
      <button onClick={handleProfileHistoryDeleteClick}>DeleteHistory</button>
  </section>)
}

export default ProfileHistory;