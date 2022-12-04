import React, {useState} from "react";
import Display from "./Display.js";
import ButtonFunc from "./ButtonFunc.js";
import {Container} from 'react-bootstrap';


export default function Body() {
        const [displayedNum, setDisplayedNum] = useState(0);
        const [operator, setOperator] = useState("");
        const [previouseNum, setPreviouseNum] = useState(0)
        
        const handleDisplayedNum = (e) => {
            if(displayedNum === 0) {
                if(e.target.value === '.'){
                    let num = displayedNum + '.';
                    console.log(num)
                    parseFloat(num)
                    console.log(typeof num)
                    setDisplayedNum(num)
                } else {setDisplayedNum(Number(e.target.value))}
            } else {
                if(e.target.value === '.'){
                    let num = displayedNum + '.';
                    parseFloat(num)
                    setDisplayedNum(num)
                } else{
                let newNum = displayedNum + e.target.value
                setDisplayedNum(Number(newNum))
                 }
            }
        }
        
        const handleOperatorButtons = (e) => {
            
           switch(e.target.value) {
            case "AC":
                setPreviouseNum(0)
                setDisplayedNum(0)
                setOperator("")
                break;
            case "+/-":
                if(Math.sign(displayedNum) === 1) {
                    setDisplayedNum("-" + displayedNum)
                } else {
                    setDisplayedNum(displayedNum.slice(1))
                }
                break;
            case "%":
                setDisplayedNum(displayedNum / 100)
                break;
            case "/": 
                if(previouseNum === 0) {
                    setPreviouseNum(displayedNum)
                } 
                setDisplayedNum('')
                setOperator("/")
                break;
            case "X":
                if(previouseNum === 0) {
                    setPreviouseNum(displayedNum)
                }
                setDisplayedNum('')
                setOperator('X')
                break;
            case "-":
                if(previouseNum === 0) {
                    setPreviouseNum(displayedNum)
                }
                setDisplayedNum('')
                setOperator('-')
                break;
            case "+":
                if(previouseNum === 0) {
                setPreviouseNum(displayedNum)
                }
                setDisplayedNum('')
                setOperator('+')
                break;
            case "=":
                if(operator === '/') {
                    setDisplayedNum(previouseNum / displayedNum)
                    setPreviouseNum(displayedNum)
                }else if (operator === 'X') {
                    setDisplayedNum(previouseNum * displayedNum)
                    setPreviouseNum(displayedNum)
                } else if (operator === '+') {
                    setDisplayedNum(previouseNum + displayedNum)
                    setPreviouseNum(displayedNum)
                } else if (operator === '-') {
                    setDisplayedNum(previouseNum - displayedNum)
                    setPreviouseNum(displayedNum)
                }
                break;
            case "clear":
                setDisplayedNum(0)                
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