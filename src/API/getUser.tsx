
export const getUser = async (id : number) => {
  try{
    //The fetch can contain mthod, headers, and body like in postman
    const response = await fetch(`https://ove-noroff-api.herokuapp.com/translations?id=${id}`)
    if(!response.ok){
      throw new Error('Could not complete request')
    }
    const data = await response.json();
    if(data.length > 0)
      return [null, data.pop()];
    else{
      throw Error("User not found");
    }
  }
  catch(error){
    let message = 'Unkown error'
    if(error instanceof Error) message = error.message;
    return [message, []]
  }
}