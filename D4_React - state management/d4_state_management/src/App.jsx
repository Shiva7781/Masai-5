// import { useState } from "react";
import "./App.css";
import { Todo } from "./components/Todo";
// function App() {
//   const [message, setMessage] = useState("");

//   const getData = (data) => {
//     console.log("Got data from child:", data);
//     setMessage(data);
//   };

//   return (
//     <div className="App">
//       <First dataFn={getData} />
//       <Second message={message} />
//     </div>
//   );
// }

// function First({ dataFn }) {
//   const data = "Hello C1";

//   return (
//     <div>
//       First Child
//       <button
//         onClick={() => {
//           dataFn(data);
//         }}
//       >
//         Send data
//       </button>
//     </div>
//   );
// }

// function Second({ message }) {
//   console.log("Got data from sibling:", message);
//   return <div>Second Child, {message}</div>;
// }

function App() {
  return (
    <div className="App">
      <Todo />
    </div>
  );
}

export default App;
