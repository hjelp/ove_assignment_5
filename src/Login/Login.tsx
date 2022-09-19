import "./Login.css"
import { useForm } from 'react-hook-form'
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { storageSave} from "../Storage/Storage";
import WithoutAuth from "../Auth/WithoutAuth";
import getUserByUsername from "../API/getUserByUsername";

interface FormValues {
    username: string,
}

function Login() {

    const [error, setError] = useState<string | null>(null);

    const { register, handleSubmit, formState: { errors: formErrors } } = useForm<FormValues>();

    const [, setUser] = useContext(UserContext);

    const nav = useNavigate();

    // Fetches users with username === to form value, if any logs in as first found.
    const onSubmit = async (values: FormValues) => {
        const [error, user] = await getUserByUsername(values.username);
        if(error !== null)
            setError(error);
        else {
            setUser(user); 
            storageSave('translate-user', user.id)
            nav("/translation");
        }
    }

    return (
        <div className="Container">
            <form className="Form">
                <input placeholder="What's your name?" {...register("username", { required: ("Username is required to login") })} />
                <BsFillArrowRightCircleFill  className="Submit-Btn" type="submit" onClick={handleSubmit(onSubmit)}/>
            </form>
            <p className="Error">{formErrors.username && formErrors.username.message
                || error && error}</p>
        </div>
    );
}

export default WithoutAuth(Login);