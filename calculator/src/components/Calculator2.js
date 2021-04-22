import React, { Component } from 'react'
import Buttons from './Buttons'
import Screen from "./Screen"
import "./Calculator.css"

export class Calculator extends Component {
    constructor(){
      super()
      this.state = {
        display: "0",
        firstNum: 0,
        secondNum: 0,
        operator: "",
        // displayCopy: ""  
        waitingForInput: false,
        calculated: false,
        wipeScreen: false,
        equalPressed: false
      }
      this.formatter = new Intl.NumberFormat('en')
      this.answer = ""
      this.displayCopy = ""
    }  

    handleClick = (e) => {
        // this.displayCopy === "" ? this.displayNumber(e) : this.buildNumber(e)
        this.state.wipeScreen ? this.displayNumber(e) : this.buildNumber(e)
    }

    displayNumber = (e) => {
        let input = e.target.value
         
        if (this.state.display !=="0" && input === "0"){
            this.setState({display: "0"})
            this.displayCopy=""
        }

        if (input !== "0"){
            // this.setState({displayCopy: input})
            this.displayCopy = input
            this.setState({display: this.formatter.format(input)})
        }     

        if (this.state.waitingForInput ){
            this.setState({secondNum: this.displayCopy})
        } else if (!this.state.waitingForInput && !this.state.calculated){
            this.setState({firstNum:this.displayCopy})

        } else if (!this.state.waitingForInput && this.state.calculated && this.state.equalPressed){
            this.setState({firstNum:this.displayCopy})
        }else {
            this.setState({secondNum: this.displayCopy})
        }

        // if(! this.state.waitingForInput){
        //     this.setState({firstNum: this.displayCopy})  
        // } else{
        //     this.setState({secondNum: this.displayCopy})
        // }

        this.setState({wipeScreen: false})
    }

    buildNumber = (e) => {
        let input = e.target.value 
        // this.setState({displayCopy: this.displayCopy + input})
        this.displayCopy = this.displayCopy + input
        this.setState({display: this.formatter.format(this.displayCopy)})   
        if(!this.state.waitingForInput){
            this.setState({firstNum: this.displayCopy})  
        } else{
            this.setState({secondNum: this.displayCopy})
        }    
    }

    switcheroo = () => {
        if (this.state.display !== "0"){
        // this.setState({displayCopy: this.displayCopy * -1})
        this.displayCopy = this.displayCopy * -1
        this.setState({display: this.formatter.format(this.displayCopy)})
            // if (! this.state.waitingForInput){
            //     this.setState({firstNum: this.displayCopy})
            // } else {
            //     this.setState({secondNum: this.displayCopy})
            // }
            if (this.state.secondNum){
                this.setState({secondNum: this.displayCopy})
            } else {
                this.setState({firstNum: this.displayCopy})
            }
        
        }
    }

    allClear = () => {
        this.displayCopy = ""
        this.setState({display: "0"})
        // this.setState({displayCopy: ""})
        this.setState({operator: ""})
        this.setState({firstNum: 0})
        this.setState({secondNum: 0})  
        this.setState({calculated:false})
        this.setState({wipeScreen: false})
        this.answer = ""
    }

    operator = (e) => {
        this.setState({waitingForInput: true})
        this.setState({operator: e.target.value})
        this.setState({calculated:false})
        this.setState({equalPressed: false})
        // this.setState({firstNum: Number(this.displayCopy)})  
        if (this.state.firstNum === 0){
            this.setState({firstNum: this.displayCopy})
        }

        if (this.state.firstNum && this.state.secondNum){
            this.calculate()
        } 
        // else if (this.formatter.format(this.answer) === this.state.display){
        //     console.log("heyyy")

        // }
        // this.displayCopy = ""   
        this.setState({wipeScreen: true})
    }    

    calculate = () => {
        const {firstNum, secondNum} = this.state
        const firstNumber = Number(firstNum)
        const secondNumber = Number(secondNum)

        // this.setState({secondNum: this.displayCopy})      
       if (secondNum){ 

        let operator = this.state.operator
        switch (operator) {
          case "+":
            this.answer = firstNumber + secondNumber
            this.setState({display: this.formatter.format(this.answer)})
            break;
            case "-":
            this.answer = firstNumber - secondNumber
            this.setState({display: this.formatter.format(this.answer)})
            break;
            case "/":
              this.answer = Math.floor(firstNumber / secondNumber) 
              this.setState({display: this.formatter.format(this.answer)})
              break;
            case "*":
              this.answer = firstNumber * secondNumber
              this.setState({display: this.formatter.format(this.answer)})
              break;
          default:
            break;
        }
      
        this.setState({display: this.formatter.format(this.answer) || "0"})
        // this.setState({firstNum: 0})
        this.setState({firstNum: this.answer})
        this.setState({secondNum:0})
        this.setState({waitingForInput:false})
        this.setState({calculated: true})
        this.displayCopy = this.answer
        // this.displayCopy = ""   
        this.setState({wipeScreen: true})
       
    }

      }

      equalPressed = () => {
          this.setState({equalPressed: true})
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
          equalPressed = {this.equalPressed}
 
          />
        </div>   
 
        )
    }
}

export default Calculator