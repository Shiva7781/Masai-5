import { sum, mult } from "./calc";

import React from "react";

import ReactDOM from "react-dom";

import "./index.css";

console.log(sum(3, 1));

console.log(mult(3, 7));

// const h1 = React.createElement("h1", {}, "Hello React!");

// const div = React.createElement("div", { class: "border" }, "Hello Div");

// const img = React.createElement("img", {
//     width: "121px",
//     height: "121px",
//     src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU",
// });

// const toShow = true; // >>> Condition

// const p = React.createElement(
//     "div",
//     { class: "redtext", id: "uniqID" },
//     h1,
//     div,
//     img,
//     "Just a String!",
//     toShow ? img : null
// );

// ReactDOM.render(
//     p, // >>> What you want
//     document.getElementById("root") // >>> Where you want
// );

ReactDOM.render(
    <div>
        <h1>Jai Shri Ram</h1>
        <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-xnFJKejTBrJnPWcj3g1GhT1iRPTptnDVaQ&usqp=CAU"
            height={242}
            width={242}
        />
        <h2>React</h2>
        <img
            src="https://scontent-bom1-2.xx.fbcdn.net/v/t1.18169-9/1010076_477783955633350_1900224762_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=JHb4vp0h2-UAX_ZCYk0&_nc_ht=scontent-bom1-2.xx&oh=00_AT_QD3_wwthNudPxoJ6j9dENaAwWAerbGzvroWQm5zNrsg&oe=62779341"
            height="121px"
            width="121px"
        />
    </div>, // >>> What you want : JSX
    document.getElementById("root") // >>> Where you want
);

