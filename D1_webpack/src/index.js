import { sum, mult } from "./calc";

import "./index.css"

// const mySecretKey = "1234";

// console.log(sum(3, 7, mySecretKey));

console.log(sum(3, 1));

console.log(mult(3, 7));

const root = document.getElementById("root");

const h1 = document.createElement("h1")
h1.innerText = "Hellow World";
// h1.classList.add("redtext")       //1
h1.setAttribute("class", "redtext")       //1

root.append(h1)

// CSS Loader
// image Loader
// font Loader