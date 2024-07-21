import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement(
    "h1",
    { id: "heading" }, //attributes
     "Hello World from React! By Shivam!!"
); // creating heading by using react
console.log(heading) // object
const root = ReactDOM.createRoot(document.getElementById("root"));// creating root using React DOM...We used React DOM because root is in DOM

root.render(heading);