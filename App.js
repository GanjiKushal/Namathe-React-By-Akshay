import React from "react";
import ReactDOM from "react-dom/client";

//JSX
const Title = () => (
  <h1 id="heading" className="head">
    Namaste React from Title component
  </h1>
);


const title =  (
  <h1 id="heading" className="head">
    Namaste React from title Element
  </h1>
);

//React Functional Component
const HeadingComponent = () => {
  return (
    <div>
      <Title />
      {title}
      {100+200}
      <h1 id="heading">Namaste React from Functional Component</h1>
    </div>
  );
};
//const HeadingComponent2=()=><h1 id="heading">Namaste React from Functional Component</h1>

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
root.render(<HeadingComponent />);
