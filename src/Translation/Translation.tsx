import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { User, UserContext } from "../Context/UserContext";
import TranslationBox from "./TranslationBox";
import TranslationForm from "./TranslationForm";


const apiUrl = process.env.REACT_APP_API_URL!
const apiKey = process.env.REACT_APP_API_KEY!



async function updateTranslation(user: User, word: string) {
    try {
        const response: any = await fetch(apiUrl + user.id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "x-api-key": apiKey
            },
            body: JSON.stringify({
                translations: [...user.translations, word],
            })
        })
        if (!response.ok) {
            throw new Error("Could not update translations")
        }
        const data = await response.json()
        return data
    }
    catch (error) {
        console.log(error)
        return null
    }
}


function Translation() {

    const [letter, setLetter] = useState("")
    const [user, setUser] = useContext(UserContext)

    if (user === null) {
        return <Navigate to={"/"} />
    }

    const submitTranslationHandler = async () => {
        const myLetter = letter.replace(/[^a-zA-Z\s]/g, "")
        if (myLetter.trim().length > 0) {
            let updatedUser = await updateTranslation(user, myLetter)
            if (updatedUser !== null)
                setUser(updatedUser)
        }
    }

    return (<>
        <TranslationForm submitTranslationHandler={submitTranslationHandler} setLetter={setLetter} />
        <h1>Translation</h1>
        <TranslationBox letter={letter} />
    </>)
}

export default Translation;
export { updateTranslation }