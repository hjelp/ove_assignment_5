import { useContext } from "react";
import UserContext from "../Context/UserContext";

///Returns the updated user with the given translations
export const deleteTranslation = async (UserId : number, translations: string[]) => {

  //The fetch can contain mthod, headers, and body like in postman
  try{
  const response = await fetch(`https://ove-noroff-api.herokuapp.com/translations/${UserId}`, {
      method: 'PATCH',
      headers: {
        'X-API-KEY': ''+process.env.REACT_APP_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        translations: translations
      })
    })
    if(!response.ok){
      throw new Error('Could not complete request')
    }
    const jsonResponse = await response.json();
    return [null, jsonResponse]
  }catch(error){
    let message = 'Unkown error'
    if(error instanceof Error) message = error.message;
    return [message, []]
  }
}