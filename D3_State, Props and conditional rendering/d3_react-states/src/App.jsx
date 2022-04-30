import { useState } from "react";
import "./App.css";
import { Category } from "./components/Category";

function App() {
  const navbar = [
    {
      image: "https://rukminim2.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
      title: "Top Offers",
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU",
      title: "Lord",
    },
    {
      image: "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
      title: "Mobiles",
    },
  ];

  const [counter, setCounter] = useState(0);

  const handleSub = () => {
    if (counter < 1) {
      return;
    }
    setCounter(counter - 1);
  };

  const handleDouble = () => {
    setCounter(counter * 2);
  };

  const handleReset = () => {
    setCounter(counter * 0);
  };

  return (
    <div className="App">
      <div className="nav">
        {/* <Category image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU"} label="Lord" />
       <Category image={"https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100"} label="Mobile" />
       <Category image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU"} label="Lord" />
     */}

        {navbar.map((ele) => (
          <Category image={ele.image} label={ele.title} />
        ))}
      </div>

      <div className="Counter">
        <h3>Counter : {counter}</h3>
        <button
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          Add 1
        </button>

        <button onClick={handleSub}>Sub 1</button>

        <button onClick={handleDouble}>Double</button>

        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;

/*-----------------------------------------------------------------------*/
/*
II Method
*/

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [counter, setCounter] = useState(0);

//   const handleChange = (value) => {
//     // if (counter < 1) {
//     //   return;
//     // }
//     setCounter(counter + value);
//   };

//   if (counter >= 21) {
//     return <h3>Counter reached maximum value</h3>;
//   }

//   return (
//     <div className="App">
//       <div className="Counter">
//         <h3>Counter : {counter}</h3>

//         <button
//           onClick={() => {
//             handleChange(1);
//           }}
//         >
//           Add 1
//         </button>

//         <button
//           onClick={() => {
//             handleChange(-1);
//           }}
//         >
//           Sub 1
//         </button>

//         {/* <button
//           onClick={() => {
//             handleChange(+(*2));
//           }}
//         >
//           Double
//         </button>

//         <button
//           onClick={() => {
//             handleChange(*0);
//           }}
//         >
//           Reset
//         </button> */}

//         <div>Number is {counter % 2 === 0 ? "Even" : "Odd"}</div>
//       </div>
//     </div>
//   );
// }

// export default App;
