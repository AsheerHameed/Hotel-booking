import React from "react";
import "./App.css";
import { Navbar, Home, Features, Rooms, Message,Contact } from "./components";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Features />
      <Rooms />
      <Message />
      <Contact />

    </div>
  );
};

export default App;
