import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

    increment = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div onClick={this.increment} className="cell" style={{backgroundColor: this.state.color}}> </div>
    )
  }


}

export default Cell
