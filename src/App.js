import React from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";
import FormComponent from "./components/FormComponent";
import PureComponent from "./components/PureComponent";
import ParentComp from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";


function App() {


  return (
    <div className="App">
      {/*<FormComponent></FormComponent>*/}
      {/*<LifecycleA></LifecycleA>*/}
      {/*<ParentComp></ParentComp>*/}
      <RefsDemo></RefsDemo>
    </div>
  );
}

export default App;
