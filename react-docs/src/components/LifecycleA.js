import React, { Component } from "react";

export class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ruijadom"
    };
    console.log("LifecycleA constructor");
  }

  static getDerivedStateFromProps(propsm, state) {
    console.log("Lifecycle getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return <div>LifecycleA</div>;
  }
}

export default LifecycleA;
