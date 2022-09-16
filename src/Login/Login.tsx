import "./Login.css"
import { useForm } from 'react-hook-form'
import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { User, UserContext } from "../Context/UserContext";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { storageSave, storageRead } from "../Storage/Storage";

const API_USER_URI = "https://ove-noroff-api.herokuapp.com/translations";

interface FormValues {
    username: string,
}


function Login() {

    const [error, setError] = useState<Error | null>(null);

    const { register, handleSubmit, formState: { errors: formErrors } } = useForm<FormValues>();

    const [, setUser] = useContext(UserContext);

    const nav = useNavigate();

    // Silent login on-load;
    useEffect(() => {
        let user = storageRead('translate-user');
        if(user === null)
            return;
        setUser(user);
        nav("/translation");
    });

    // Fetches users with username === to form value, if any logs in as first found.
    const onSubmit = (values: FormValues) => {
        fetch(API_USER_URI + '?username=' + values.username)
            .then(response => response.json())
            .then((users: User[]) => {
                if (users.length === 0)
                    throw new Error("No users with that name");
                setUser(users[0]); // Update UserContext to store the logged in User;
                storageSave("translate-user", users[0]); // Save the loggend in user in local storage.
                nav("/translation"); // Navigate to the translation page.
            })
            .catch(error => { setError(error) });
    }

    return (
        <div className="Container">
            <form className="Form">
                <input placeholder="What's your name?" {...register("username", { required: ("Username is required to login") })} />
                <BsFillArrowRightCircleFill  className="Submit-Btn" type="submit" onClick={handleSubmit(onSubmit)}/>
            </form>
            <p className="Error">{formErrors.username && formErrors.username.message
                || error && error.message}</p>
        </div>
    );
}

export default Login;