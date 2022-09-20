import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


const WithoutAuth  = (Component: FC) => (props: JSX.IntrinsicAttributes) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, ] = useContext(UserContext);
    if(user === null)
        return <Component {...props} />
    return <Navigate to="/translation" />
 
} 

export default withoutAuth;
