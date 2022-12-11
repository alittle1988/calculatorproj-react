import React, {useState} from "react";
import Display from "./Display.js";
import ButtonFunc from "./ButtonFunc.js";
import {Container} from 'react-bootstrap';


export default function Body() {
        const [displayedNum, setDisplayedNum] = useState("0");
        const [operator, setOperator] = useState("");
        const [previouseNum, setPreviouseNum] = useState("")

       function isInt(n){
        return Number(n) === n && n % 1 ===0;
       }

    
       
       //number button handler 
        const handleDisplayedNum = (e) => {
            console.log(typeof displayedNum)
            if(operator === '=') {
                setDisplayedNum(e.target.value)
            } else{
                    if(displayedNum === '0'){
                        setDisplayedNum(e.target.value)
                    }else {
                    let newNum = displayedNum + e.target.value
                    setDisplayedNum(newNum)
                    }
                }
        }
        //Operator Button handler
        const handleOperatorButtons = (e) => {
            
           switch(e.target.value) {
            case "AC":
                setPreviouseNum('')
                setDisplayedNum("0")
                setOperator("")
                break;
            case "+/-":
                if(Math.sign(displayedNum) === 1) {
                    let num = -Math.abs(displayedNum)
                    setDisplayedNum(num.toString())
                }else {
                    let num = Math.abs(displayedNum)
                    setDisplayedNum(num.toString())
                    
                }
                break;
            case "%":
                setDisplayedNum(displayedNum / 100)
                break;
            case "/": 
                setPreviouseNum(displayedNum)
                setDisplayedNum("0")
                setOperator("/")
                break;
            case "X":
                setPreviouseNum(displayedNum)
                setDisplayedNum("0")
                setOperator('X')
                break;
            case "-":
                setPreviouseNum(displayedNum)
                setDisplayedNum("0")
                setOperator('-')
                break;
            case "+":
            
                setPreviouseNum(displayedNum)
                setDisplayedNum("0")
                setOperator('+')
                break;
            case '.':
                if( isInt(Number(displayedNum)) === true) {
                    let num = displayedNum + '.';
                    setDisplayedNum(num)
                } 
                break;
            case "=":
                if(operator === '/') {
                    let num = Number(previouseNum) / Number(displayedNum)
                    setDisplayedNum(num.toString())
                    setOperator('=')
                    
                }else if (operator === 'X') {
                    let num = Number(previouseNum) * Number(displayedNum)
                    setDisplayedNum(num.toString())
                    setOperator('=')
                } else if (operator === '+') {
                    let num = Number(previouseNum) + Number(displayedNum)
                    setDisplayedNum(num.toString())
                    setOperator('=')
                    
                } else if (operator === '-') {
                    let num = Number(previouseNum) - Number(displayedNum)
                    setDisplayedNum(num.toString())
                    setOperator('=')
                }
                
                break;
            case "clear":
                setDisplayedNum("0")                
                break;
                default:
                    alert("You Lose the Game")
           } 
          
           
        }
        
        

    return (<>
        <Container className="bodyContainer">
            <Display>{displayedNum}</Display>
            <ButtonFunc onDisplayedNum={handleDisplayedNum} onOperatorButton={handleOperatorButtons}/>
        </Container>
        
    </>)

};

