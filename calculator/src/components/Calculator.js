import React, { Component } from 'react'
import "./Calculator.css"

export class Calculator extends Component {
    render() {
        return (
  
        <div className="calculator"> 
          <div className="screen">0</div> 
          <button className="col1 operator">+</button> 
          <button className="col2 operator">-</button> 
          <button className="col3 operator">x</button> 
          <button className="col4 operator">÷</button> 
          <button className="col1">7</button> 
          <button className="col2">8</button> 
          <button className="nine">9</button> 
          <button className="col4 operator">+/-</button>
          <button className="col1">4</button> 
          <button className="col2">5</button> 
          <button className="col3">6</button> 
          <button className="col4 operator">AC</button> 
          <button className="col1">1</button> 
          <button className="col2">2</button> 
          <button className="col3">3</button>
          <button className="col4 operator">=</button> 
          <button className="zero">0</button>              
        </div>   
 
        )
    }
}

export default Calculator
