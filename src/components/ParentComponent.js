import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComponent'
import MemoComponent from './MemoComponent'

class ParentComp extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       name: 'Ruijadom'
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: 'Ruijadom'
      })
    }, 2000)
  }
  

  render() {
    console.log('*************** Parent Component Render *****************')
    return (
      <div>
        Parent Component
        <MemoComponent name={this.state.name}></MemoComponent>
        {/*<RegComp name={this.state.name}></RegComp>*/}
        {/*<PureComp name={this.state.name}></PureComp>*/}
      </div>
    )
  }
}

export default ParentComp
