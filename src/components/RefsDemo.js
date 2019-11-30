import React, { Component } from 'react'

class RefsDemo extends Component {
  constructor(props) {
    super(props)
  
    this.inputRef = React.createRef()
  }
  
  componentDidMount() {
    this.inputRef.current.focus();
    //console.log(this.inputRef.current.value)
  }

  clickHandler = () => {
    alert(this.inputRef.current.value);
  }

  render() {
    return (
      <div>
        <form onClick={this.clickHandler}>
        <input type="text" ref={this.inputRef}></input>
        <button type="submit">Click</button>
        </form>


      </div>
    )
  }
}

export default RefsDemo
