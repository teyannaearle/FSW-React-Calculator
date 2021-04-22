import React, { Component } from 'react'

export class Buttons extends Component {
 runR = () => {
    this.props.equalPressed()
    this.props.calculate()
 }
    render() {  
        return (         
         <>
           <button className="col1 operator" value="+" onClick={this.props.operator}>+</button> 
          <button className="col2 operator" value="-" onClick={this.props.operator}>-</button> 
          <button className="col3 operator" value="*" onClick={this.props.operator}>x</button> 
          <button className="col4 operator" value="/" onClick={this.props.operator}>÷</button> 
          <button className="col1" value="7" onClick={this.props.handleClick}>7</button> 
          <button className="col2" value="8" onClick={this.props.handleClick}>8</button> 
          <button className="nine" value="9" onClick={this.props.handleClick}>9</button> 
          <button className="col4 operator"  onClick={this.props.switch}>+/-</button>
          <button className="col1" value="4" onClick={this.props.handleClick}>4</button> 
          <button className="col2" value="5" onClick={this.props.handleClick}>5</button> 
          <button className="col3" value="6" onClick={this.props.handleClick}>6</button> 
          <button className="col4 operator" onClick={this.props.clear}>AC</button> 
          <button className="col1" value="1" onClick={this.props.handleClick}>1</button> 
          <button className="col2" value="2" onClick={this.props.handleClick}>2</button> 
          <button className="col3" value="3" onClick={this.props.handleClick}>3</button>
          <button className="col4 operator" value="=" onClick={this.runR}>=</button> 
          <button className="zero" value="0" onClick={this.props.handleClick}>0</button>    
           </>
        )
    }
}

export default Buttons
