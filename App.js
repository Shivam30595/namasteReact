const heading = React.createElement(
    "h1",
    { id: "heading" }, //attributes
     "Hello World from React!"
); // creating heading by using react
console.log(heading) // object
const root = ReactDOM.createRoot(document.getElementById("root"));// creating root using React DOM...We used React DOM because root is in DOM

root.render(heading);