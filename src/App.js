import React from "react";
import "./App.css";
import {
  Navbar,
  Home,
  Features,
  Rooms,
  Message,
  Contact,
  Footer,
} from "./components";

const App = () => {
  return (
    <div className="main">
      <Navbar />
      <Home />
      <Features />
      <Rooms />
      <Message />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
