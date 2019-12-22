import React, { Component } from "react";
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
import User from "./components/User";
import Counter from "./components/Counter";
import ComponentC from "./components/ComponentC";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ComponentC></ComponentC>
        {/*<Counter
          render={(count, incrementCount) => (
            <ClickCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />
        <Counter
          render={(count, incrementCount) => (
            <HoverCounterTwo count={count} incrementCount={incrementCount} />
          )}
        />*/}
        {/*<FormComponent></FormComponent>*/}
        {/*<LifecycleA></LifecycleA>*/}
        {/*<ParentComp></ParentComp>*/}
        {/*<RefsDemo></RefsDemo>*/}
        {/*<FRParentInput></FRParentInput>*/}
        {/*<PortalDemo></PortalDemo>*/}
        {/*<HoverCounterTwo></HoverCounterTwo>*/}
        {/*<ClickCounterTwo></ClickCounterTwo>*/}
        {/*<User render={ (isLoggedIn)=> isLoggedIn ? 'Ruijadom': 'Guest' }></User>*/}
      </div>
    );
  }
}

export default App;
