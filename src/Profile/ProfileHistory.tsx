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

  //We can choose to navigate away or give it the possibility to delete one
  //Each translation does not have an id
  const handleTranslationClicked =  (index: number) => { 
    console.log("You clicked " + index)

  }

  return (
  <section>
      <h4>Your translation history</h4>
      <ul>
        { 
          //Todo: Add the picture versions of each
          user && 
          user.translations.map((t, index) =><ProfileHistoryItem text={t} 
            index={index} key={index + "-" + t} onSelect={handleTranslationClicked}/>)
        }
      </ul>
      <button onClick={handleProfileHistoryDeleteClick}>DeleteHistory</button>
  </section>)
}

export default ProfileHistory;