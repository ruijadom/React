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
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      {/*<FormComponent></FormComponent>*/}
      {/*<LifecycleA></LifecycleA>*/}
      {/*<ParentComp></ParentComp>*/}
      {/*<RefsDemo></RefsDemo>*/}
      {/*<FRParentInput></FRParentInput>*/}
      {/*<PortalDemo></PortalDemo>*/}
      <ErrorBoundary>
        <Hero heroName="Batman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Superman"></Hero>
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName="Joker"></Hero>
      </ErrorBoundary>
    </div>
  );
}

export default App;
