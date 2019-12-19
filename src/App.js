import React from "react";
import "./App.css";
import LifecycleA from "./components/LifecycleA";
import FormComponent from "./components/FormComponent";
import PureComponent from "./components/PureComponent";
import ParentComp from "./components/ParentComponent";
import RefsDemo from "./components/RefsDemo";
import FRInput from "./components/FRInput";
import FRParentInput from "./components/FRParentInput";
import PortalDemo from "./components/PortalDemo";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";


function App() {
  return (
    <div className="App">
      {/*<FormComponent></FormComponent>*/}
      {/*<LifecycleA></LifecycleA>*/}
      {/*<ParentComp></ParentComp>*/}
      {/*<RefsDemo></RefsDemo>*/}
      {/*<FRParentInput></FRParentInput>*/}
      {/*<PortalDemo></PortalDemo>*/}
      <HoverCounterTwo></HoverCounterTwo>
      <ClickCounterTwo></ClickCounterTwo>
    </div>
  );
}

export default App;
