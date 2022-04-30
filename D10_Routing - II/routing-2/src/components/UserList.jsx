import { useEffect, useState } from "react";
import axios from "react";
import { Link, useLocation } from "react-router-dom";

const useQuery = (q) => {
  const param = new URLSearchParams();
  return param.get(q);
};

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const location = useLocation();

  console.log("Location", location);

  console.log(useQuery("page"));

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then(({ data }) => {
      setUsers(data.data);
    });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <p key={user.id}>
          <Link to={`/users/${user.id}`}>
            {user.id}. {user.first_name}
          </Link>
        </p>
      ))}
    </div>
  );
};
