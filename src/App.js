import React from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";
import FormComponent from "./components/FormComponent";
import PureComponent from "./components/PureComponent";
import ParentComp from "./components/ParentComponent";


function App() {


  return (
    <div className="App">
      {/*<FormComponent></FormComponent>*/}
      {/*<LifecycleA></LifecycleA>*/}
      <ParentComp></ParentComp>
    </div>
  );
}

export default App;
