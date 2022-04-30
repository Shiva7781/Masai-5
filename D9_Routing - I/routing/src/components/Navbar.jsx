import { Link } from "react-router-dom";

export const Navbar = () => {
  const nav = [
    { title: "HOME", to: "/" },
    { title: "About Us", to: "/about" },
    { title: "Users", to: "/users" },
  ];
  return (
    <div>
      {/* <Link to="/">Home</Link>
      <Link to="/about">About</Link> */}

      {nav.map((e, i) => (
        <Link key={i} to={e.to} style={{ margin: "5px" }}>
          {e.title}
        </Link>
      ))}
    </div>
  );
};
