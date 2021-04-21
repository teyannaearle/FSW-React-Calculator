import React, { Component } from 'react'
import Buttons from './Buttons'
import Screen from "./Screen"
import "./Calculator.css"

export class Calculator extends Component {
    constructor(){
      super()
      this.state = {
        display: "0" ,
        history: "" ,  

      }
      this.numberCopy = ""
      this.answer =""
      this.formatter = new Intl.NumberFormat('en')
      this.array = []


    }  

    handleClick = (e) => {
        this.numberCopy.length === 0 ? this.displayNumber(e) : this.buildNumber(e)
    }

    displayNumber = (e) => {
        let input = e.target.value

        if (input !== "0"){
            this.setState({display: input})
            this.setState({history: input})
            this.numberCopy = input
        }
        console.log(this.array)
        
    }

    buildNumber = (e) => {
        let input = e.target.value 
        this.numberCopy = this.numberCopy + input
        this.setState({history: this.numberCopy})
        this.setState({display: this.formatter.format(this.numberCopy)})       
    }

    switcheroo = () => {
        if (this.state.display !== "0"){
        this.numberCopy = this.state.history * -1
        this.setState({history: this.numberCopy})
        this.setState({display: this.formatter.format(this.numberCopy)})
        }
    }

    allClear = () => {
        this.setState({display: "0"})
        this.setState({history: ""})
        this.numberCopy = ""
        this.setState({prevOp: ""})
        this.array = []
    }

    operator = (e) => {
    
      // if (this.array.length === 0) {
      //   this.array[0] = Number(this.state.history)
      //   this.array[1] = e.target.value
      // }
      // this.numberCopy = ""     
 


      if (this.array.length === 0){
        this.array.push(Number(this.state.history))
        this.array.push(e.target.value)
        this.setState({waitingForInput: true})

      } else if (this.array.length === 2){
        this.calculate()
      }

      this.numberCopy = ""
        
    }    

    calculate = () => {


      if (this.array.length === 2){
            this.array.push(Number(this.state.history))
        }

        let operator = this.array[1]
        switch (operator) {
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
      
        this.setState({display: this.formatter.format(this.answer) || "0"})
        this.setState({history: this.answer})
        this.array = [] 
        this.answer = ""
        this.numberCopy = ""
       
   
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
          operator = {this.operator}
          calculate = {this.calculate}
 
          />
        </div>   
 
        )
    }
}

export default Calculator