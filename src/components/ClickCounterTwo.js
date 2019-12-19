import React, { Component } from 'react'

export class ClickCounter extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       count: 0
    }
  }
  
  incrementCount = () => {
    this.setState(prevState => {
      console.log(prevState)
      return { count : prevState.count + 1 }
    })
  }

  render() {
    const { count } = this.state

    return (
      <div>
        <button onClick={this.incrementCount}>Click {count} times</button>
      </div>
    )
  }
}

export default ClickCounter
