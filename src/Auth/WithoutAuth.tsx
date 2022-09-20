import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const withoutAuth  = (Component: React.FC) => (props: JSX.IntrinsicAttributes) => {
    const [user, ] = useContext(UserContext);
    if(user === null)
        return <Component {...props} />
    return <Navigate to="/translation" />
 
} 

export default withoutAuth;
