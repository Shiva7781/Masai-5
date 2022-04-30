import { useContext } from "react/cjs/react.production.min";
import { Navigate } from "react-dom";
import { AuthContext } from "../contexts/AuthContext";

export const PrivateComponent = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  if (!isAuth) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }
  else {
    return children;
  }
};
