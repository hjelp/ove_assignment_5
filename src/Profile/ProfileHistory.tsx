import ProfileHistoryItem from "./ProfileHistoryItem"
import { UserContext } from "../Context/UserContext";
import { useState, useEffect, useContext } from "react";

//STATE
const translations = {
  text: ["asdasd", "bfsdfsdf", "casdasd", "dfgfsdf", "esfsdfsdf", "fsfsdf", "ghfghfg", "hadasd", "isdfsdf", "jasdasdas"],
}





const handleProfileHistoryDeleteClick= () => {

  translations.text = translations.text.splice(0, translations.text.length);

}

function ProfileHistory() {
  const [user, setUser] = useContext(UserContext);
  //Effect?

  useEffect(() => {
    if(user!=null){
      translations.text = user.translations;
    }
  }, [user])

  return (
  <>
      <ul>
        {
          translations.text.map(t =><ProfileHistoryItem text={t} key={t}/>)
        }
      </ul>
      <button onClick={handleProfileHistoryDeleteClick}>DeleteHistory</button>
  </>)
}

export default ProfileHistory;