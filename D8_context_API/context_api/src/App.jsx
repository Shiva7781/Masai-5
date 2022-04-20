import "./App.css";
import { Navbar } from "./components/Navbar";
import { Cart } from "./components/Body/Cart";
import { useContext } from "react";
import { LangContext } from "./contexts/LanguageContext";

function App() {
  const { handleChange } = useContext(LangContext);
  return (
    <div className="App">
      <button
        onClick={() => {
          handleChange();
        }}
      >
        Change Language
      </button>
      <Navbar />
      <Cart />
    </div>

    // <>
    //   <button
    //     onClick={() => {
    //       handleChange();
    //     }}
    //   >
    //     Change Language
    //   </button>
    //   <Navbar />
    //   <Cart />
    // </>
  );
}

export default App;
