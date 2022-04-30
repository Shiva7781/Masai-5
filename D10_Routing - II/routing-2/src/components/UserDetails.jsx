import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react/cjs/react.production.min";

export const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const { isAuth } = useContext(AuthContext);

  useEffect(() => {
    axios.get(`https://reqres.in/api/users${id}`).then(({ data }) => {
      setUser(data.data);
    });
  }, []);

  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div>
      <img src={user.avtar} />
      <h3>First Name :{user.first_name}</h3>
      <h3>Last Name :{user.last_name}</h3>
      UserId : {id}
    </div>
  );
};
