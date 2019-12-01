import React from "react";
import "./App.css";
import HoverCounter from "./components/HoverCounter";
import ClickCounter from "./components/ClickCounter";

function App() {
  return (
    <div className="App">
      <ClickCounter name="Ruijadom"></ClickCounter>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
