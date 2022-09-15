import "./Login.css"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_USER_URI = "https://ove-noroff-api.herokuapp.com/users";
interface user {
    id: number,
    username: string,
    favourites: string[],
}

function Login() {
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");
    const nav = useNavigate();

    const onChangeHandler = (event: React.FormEvent<HTMLInputElement>) => {
        setUsername(event.currentTarget.value);
    }

    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        fetch(API_USER_URI)
            .then(response => response.json())
            .then((users: user[]) => {
                console.log(users)
                if (!users.some(user => user.username === username))
                    throw new Error(`There are no users named ${username}`);
                // Todo: sett user with context?
                nav("/translation");
            })
            .catch((error: Error) => {
                setError(error.message);
                // Clear error message after timer
                setTimeout(() => {
                    setError("");
                }, 5000);
            });
    }

    return (
        <div className="Container">
            <form onSubmit={submitHandler} className="Form">
                <input placeholder="What's your name?" onChange={onChangeHandler}></input>
                <button type="submit">&rarr;</button>
            </form>
            <p className="Error">{error}</p>
        </div>)
}

export default Login;