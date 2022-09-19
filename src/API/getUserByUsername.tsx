import { User } from "../Context/UserContext";

async function getUserByUsername(username: string) : Promise<[string, null] | [null, User]>{
  try{
    //The fetch can contain mthod, headers, and body like in postman
    const response = await fetch(`https://ove-noroff-api.herokuapp.com/translations?username=${username}`)
    if(!response.ok){
      throw new Error('Could not complete request')
    }
    const users = await response.json() as User[];
    if(users != null && users.length > 0)
      return [null, users[0]];
    else{
      throw Error("User not found");
    }
  }
  catch(error){
    let message = 'Unkown error'
    if(error instanceof Error) message = error.message;
    return [message, null]
  }
}

export default getUserByUsername;