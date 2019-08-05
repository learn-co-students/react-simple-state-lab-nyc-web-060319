import React, { Component } from 'react';
import Data, {pattern1} from './data';
import Cell from './Cell'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

const defaultRow = pattern1[0].map(val => "#F00")
const defaultMatrix = pattern1.map(val => defaultRow)

 Matrix.defaultProps = {
  values: defaultMatrix
}
