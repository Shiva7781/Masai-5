import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       Hello d2_React_Intro
//       <button>Test - 7</button>
//       <input />
//       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU" alt="missing" />
//       <button>I'm a button</button>
//     </div>
//   );
// }

function App() {
  const food = "Pizza";
  const age = 21;
  const skills = ["MERN", "node", "DSA"];

  return (
    <>
      <div className="App">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU" alt="missing" />
        <div>
          <Skill skill="VS Code" />
          Your fav food is {food}, Your are {age} years old
          <div>You are {age > 18 ? "Eligible" : "Not Eligible"} for license</div>
          <div>
            {skills.map((e) => {
              // return <p className="redtext"> 1. {e}</p>;
              return <Skill skill={e} key="value" age={15} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

// Component
function Skill(props) {
  console.log("Skills props:", props);
  return <p className="redtext">Skill7: {props.skill}</p>;
}

export default App;

// import lib from "lib";
// //you call library code
// lib()

// import framework from "framework";
// import exp from "constants";

// framework(() => {
//   //framework calls your code
// })

// const express = require("express");

// const app = exp()

// app.get("./", function (req, res) {

// })
