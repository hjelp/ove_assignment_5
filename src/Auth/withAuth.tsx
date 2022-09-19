import { useContext} from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";


//Closure
const withAuth = (Component: React.FC) => (props: JSX.IntrinsicAttributes) => {
  const [user,] = useContext(UserContext);
  if (user === null)
    return <Navigate to="/" />
  return <Component {...props} />
}

export default withAuth