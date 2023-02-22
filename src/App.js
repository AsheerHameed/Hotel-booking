import React from "react";
import "./App.css";
import { Navbar, Home, Features, Rooms, Message } from "./components";

const App = () => {
  return (
    <div className="main">
      {/* <Navbar /> */}
      <Home />
      <Features />
      {/* <Rooms /> */}
      {/* <Message /> */}
    </div>
  );
};

export default App;
