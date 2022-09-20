import ProfileHistoryItem from "./ProfileHistoryItem"
import { UserContext } from "../Context/UserContext";
import { useState, useContext } from "react";
import { deleteTranslation } from "../API/deleteTranslation";

//STATE
//var translations: string[] = [];

const ProfileHistory = (props: { translations: string[] }) =>  {

  const [user, setUser] = useContext(UserContext);

  

  const[SelectedId, setSelectedId] = useState<number>(-1);
  const handleProfileHistoryDeleteClick =  () => {
    deleteTranslations();
  }

  const deleteTranslations = (id : number = -1) => {
    if(user!=null){
      (async function fetchData(){
        //Splice returns no element array if no deletion
        var tempTranslations : string[] = user.translations.reverse();
        var deleteCount : number = 1;
        if(id<0){
          deleteCount = tempTranslations.length
          id=0;
        }
        tempTranslations.splice(id, deleteCount);
        const [error, newUser] = await deleteTranslation(user.id, tempTranslations);
        if(error === null){
          setUser(newUser);
        }else{
          throw Error(error);
        }
        
      })()
    }
  }


  const translationHistoryId = "translationHistoryList";

  //We can choose to navigate away or give it the possibility to delete one
  const handleTranslationClicked =  (index: number, e : React.MouseEvent<HTMLLIElement>) => { 
    //just to prevent double click deselecting
    if (e.detail === 1){ 
      setSelectedId(index);
    
      //Unselect all others
      const elList = document.getElementById(translationHistoryId);
      if(elList === null) return;
      for (var i = 0; i < elList.children.length; i++) {
        elList.children[i].className="unselectedHistory";
      }
      //Select ours
      e.currentTarget.className = 
        (e.currentTarget.className === "selectedHistory") ? "unselectedHistory" : "selectedHistory";
    }
  }

  return (
  <section id="profileHistory">
      <h4>Your translation history</h4>
      <ul id={translationHistoryId}>
        { 
          //Todo: Add the picture versions of each
          user &&  //Side-effect of reversing array
          [...user.translations].reverse().slice(0, 9).map((t, index) =>
          <ProfileHistoryItem text={t} 
            index={index} key={index + "-" + t} onSelect={handleTranslationClicked}/>
          
          )
        }
      </ul>
      <section id="deleteHistory">
        <button onClick={handleProfileHistoryDeleteClick}>DeleteAllHistory</button>
        <button onClick={() => deleteTranslations(SelectedId)}>DeleteSelectedHistory</button>
      </section>
  </section>)
}

export default ProfileHistory;