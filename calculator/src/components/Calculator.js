import React, { Component } from 'react'
import Buttons from './Buttons'
import Screen from "./Screen"
import "./Calculator.css"


export class Calculator extends Component {
  constructor(){
    super()
    this.state = {
      display: "0" ,
      history: ""  
    }
    this.enter = false
    this.clicked= false
    this.clickCount = 0
    this.number = ""
    this.formatter = new Intl.NumberFormat('en')
    this.answer = ""
  }
  

  handleClick = (e) => {
    // this.number.length === 0 ? this.displayNumber(e) : this.buildNumber(e)
    // this.state.history ? this.displayNumber(e) : this.buildNumber(e)

    if (this.enter){
    

      this.setState({history: ""})
      this.number = ""
      this.answer = ""
      this.displayNumber(e)
     
    } else {
      this.number.length === 0 ? this.displayNumber(e) : this.buildNumber(e)
    }


  }

  displayNumber = (e) => {
    // this.clickCount ++
    this.setState({display: e.target.value})
    this.number = e.target.value
    this.history = e.target.value

  }

  buildNumber = (e) => {
    // this.clickCount ++ 
    this.number = this.number + e.target.value 
    this.history = this.formatter.format(this.number)
    this.setState({display: this.formatter.format(this.number)})  

  }
  
  switcheroo = () => {
    this.number = this.number * -1
    this.history = this.formatter.format(this.number)
    this.setState({display: this.formatter.format(this.number) })
  }

  allClear = () => {
    this.setState({display: "0"})
    this.number = ""
    // this.clickCount = 0
    this.history = ""
    this.answer = ""
  }

  math = (e) => {  
    this.calculate()
    this.clicked = true

    if (this.state.display !== "0"){  
      // this.clicked = true 

      if (this.answer){
        this.answer = this.answer + " " + this.history + e.target.value
      } else{
        this.answer = this.history + " " + e.target.value
      }

    this.count = 0
    this.history = ""
    this.number = ""
    } else {
    
        this.answer = 0
        this.answer = this.answer + " " + e.target.value
    }


  }

  calculate = () => {
    if(this.clicked){
      this.answer = this.answer + " " + this.state.display
      this.clicked = false
      this.enter = true
      this.history = ""
      this.arr = this.answer.split(" ")
      this.array = []
      this.placeholder = ""

    function checker (x){      
      return ! Number.isNaN(x)   
    }
    
    // console.log(this.arr)
    for (let char of this.arr){
      if (checker(Number(char))){
        this.array.push(Number(char))
      } else if (char.includes(",")){
          for (let i of char){
              if (i !== ","){
                this.placeholder += i
              }
          }
        this.array.push(Number(this.placeholder))  
        this.placeholder = ""
      } 
      else{
        this.array.push(char)
      }
    }

    let op = this.array[1]
    switch (op) {
      case "+":
        this.answer = this.array[0] + this.array[2]
        this.setState({display: this.formatter.format(this.answer)})
        break;
        case "-":
        this.answer = this.array[0] - this.array[2]
        this.setState({display: this.formatter.format(this.answer)})
        break;
        case "/":
          this.answer = Math.floor(this.array[0] / this.array[2]) 
          this.setState({display: this.formatter.format(this.answer)})
          break;
        case "*":
          this.answer = this.array[0] * this.array[2]
          this.setState({display: this.formatter.format(this.answer)})
          break;
      default:
        break;
    }

  }
  this.enter = false  


}

    render() {
        return (
  
        <div className="calculator"> 
          <Screen 
          display = {this.state.display}
          />
          <Buttons 
          handleClick = {this.handleClick}
          switch = {this.switcheroo}
          clear = {this.allClear}
          math = {this.math}
          calculate = {this.calculate}
          />
        </div>   
 
        )
    }
}

export default Calculator
