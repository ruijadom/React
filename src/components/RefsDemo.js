import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }
  
  componentDidMount() {
    this.inputRef.current.focus();
    console.log(this.inputRef.current.value)
  }

  clickHandler = () => {
    alert(this.inputRef.current.value)
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}></input>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
