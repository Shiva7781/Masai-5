import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { LangContext } from "../contexts/LanguageContext";

export const Navbar = () => {
  const { cart } = useContext(CartContext); //consumer
  const { lang } = useContext(LangContext);

  //useContext returns everything!
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "end",
        padding: "15px",
        fontSize: "28px",
        border: "1px solid red",
        margin: "10px",
      }}
    >
      {/* cart : {cart} */}
      {lang === "en" ? "Cart" : "Thaila"}:{cart}
    </nav>
  );
};
