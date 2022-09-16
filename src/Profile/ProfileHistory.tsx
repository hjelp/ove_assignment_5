import ProfileHistoryItem from "./ProfileHistoryItem"
import { useState } from "react";

//STATE
const translations = {
  text: ["asdasd", "bfsdfsdf", "casdasd", "dfgfsdf", "esfsdfsdf", "fsfsdf", "ghfghfg", "hadasd", "isdfsdf", "jasdasdas"]
}





const handleProfileHistoryDeleteClick= () => {
  translations.text = translations.text.splice(0, translations.text.length);
}

function ProfileHistory() {
  return (
  <>
      <ul>
        {
          translations.text.map(t=><ProfileHistoryItem text={t}/>)
        }
      </ul>
      <button onClick={handleProfileHistoryDeleteClick}>DeleteHistory</button>
  </>)
}

export default ProfileHistory;