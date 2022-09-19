import ProfileHistoryItem from "./ProfileHistoryItem"
import { UserContext } from "../Context/UserContext";
import { useState, useEffect, useContext } from "react";
import { deleteTranslation } from "../API/deleteTranslation";

//STATE
//var translations: string[] = [];

const ProfileHistory = (props: { translations: string[] }) =>  {

  console.log("funny");

  const [user, setUser] = useContext(UserContext);
  const[SelectedId, setSelectedId] = useState<number>(-1);
  const handleProfileHistoryDeleteClick =  () => {
    console.log("adssadsadsad")
    debugger
    deleteTranslations();
  }

  const deleteTranslations = (id : number = -1) => {
    

    if(user!=null){
      (async function fetchData(){
        //Splice returns no element array if no deletion
        var tempTranslations : string[] = user.translations;
        debugger
        var deleteCount : number = 1;
        if(id<0){
          deleteCount = tempTranslations.length
          id=0;
          debugger
        }
        tempTranslations.splice(id, deleteCount);
        const [error, newUser] = await deleteTranslation(user.id, tempTranslations);
        debugger
        if(newUser !== null){
          setUser(newUser);
        }else{
          throw Error(error);
        }
        
      })()
    }
  }

  //We can choose to navigate away or give it the possibility to delete one
  const handleTranslationClicked =  (index: number) => { 
    console.log("You clicked " + index)
    setSelectedId(index);
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
      <button onClick={handleProfileHistoryDeleteClick}>DeleteAllHistory</button>
      <button onClick={() => deleteTranslations(SelectedId)}>DeleteSelectedHistory</button>

  </section>)
}

export default ProfileHistory;