import React from "react";
import ReactDOM from "react-dom/client";

//React Element
//JSX
const heading = (
  <h1 id="heading" className="head">
    Namaste React from JSX
  </h1>
);

//React Functional Component
const HeadingComponent=()=>{
  return(
    <h1 id="heading">Namaste React from Functional Component</h1>
  )
}
//const HeadingComponent2=()=><h1 id="heading">Namaste React from Functional Component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(HeadingComponent())
