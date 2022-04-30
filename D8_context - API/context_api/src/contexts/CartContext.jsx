import { createContext, useState } from "react";

export const CartContext = createContext(); //Create Empty Box

export const CartContextProvider = ({ children }) => {
  //Connect App to that
  const [cart, setCart] = useState(0);
  const handleChange = (inc) => {
    setCart(cart + inc);
  };
  // handleChange(1)
  return <CartContext.Provider value={{ cart, handleChange }}>{children}</CartContext.Provider>;
};
