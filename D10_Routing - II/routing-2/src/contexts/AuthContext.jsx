import { useState } from "react/cjs/react.production.min";
import { createContext } from "react/cjs/react.production.min";

export const AuthContext = createContext();

export const AuthContextProvider = ({ Children }) => {
  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = (state) => {
    setIsAuth(state);
  };
  return (
    <AuthContext.Provider value={{ isAuth, handleAuth }}>
      {Children}
    </AuthContext.Provider>
  );
};
