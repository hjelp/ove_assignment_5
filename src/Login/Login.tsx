import "./Login.css"
import { useForm } from 'react-hook-form'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { storageSave } from "../Storage/Storage";
import getUserByUsername from "../API/getUserByUsername";
import WithoutAuth from '../Auth/withoutAuth';

interface FormValues {
    username: string,
}

function Login() {

    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors: formErrors } } = useForm<FormValues>();

    const [, setUser] = useContext(UserContext);

    const nav = useNavigate();

    // Fetches users with username === to form value, if any logs in as first found.
    const onSubmit = (values: FormValues) => {
        getUserByUsername(values.username)
        .then(data => {
            let [error, user] = data;
            if(error !== null) {
                setError(error);
                return;
            }
            if(user !== null) {
                setUser(user); // Update UserContext to store the logged in User;
                storageSave("translate-user", user.id); // Save the loggend in user in local storage.
                nav("/translation"); // Navigate to the translation page.
                return;
            }
        });
    }

    return (
        <div className="Container">
            <form className="Form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="What's your name?" {...register("username", { required: ("Username is required to login") })} />
                <BsFillArrowRightCircleFill  className="Submit-Btn" type="submit" onClick={handleSubmit(onSubmit)}/>
            </form>
            <p className="Error">{formErrors.username && formErrors.username.message
                || error && error}</p>
        </div>
    );
}

export default WithoutAuth(Login);