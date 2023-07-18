import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./componnets/Header";
import Body from "./componnets/Body";
import Footer from "./componnets/Footer";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Footer/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
