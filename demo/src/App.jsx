import React, { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";

function App() {
  const [count, setCount] = useState(0);
  const total= 1 + 2

  return (
    <>
  
   <Navbar/>
   <Home/>
    </>
  );
}

export default App;
