import React from "react";
import { Container, Row } from "react-bootstrap";



export default function ButtonFunc(props) {
    const {onDisplayedNum, onOperatorButton} = props;
    
    
       

    return (<>
        <Container className="buttonContainer">
            <Row>
                <button onClick={onOperatorButton} value="AC" type="button" className="button">AC</button>
                <button onClick={onOperatorButton} value="+/-" type="button" className="button">+/-</button>
                <button onClick={onOperatorButton} value="%" type="button" className="button">%</button>
                <button onClick={onOperatorButton} value="/" type="button" className="button">/</button>
            </Row>
            <Row>
                <button onClick={onDisplayedNum} value="7" type="button" className="button">7</button>
                <button onClick={onDisplayedNum} value="8" type="button" className="button">8</button>
                <button onClick={onDisplayedNum} value="9" type="button" className="button">9</button>
                <button onClick={onOperatorButton} value="X" type="button" className="button">X</button>
            </Row>
            <Row>
                <button onClick={onDisplayedNum} value="4" type="button" className="button">4</button>
                <button onClick={onDisplayedNum} value="5" type="button" className="button">5</button>
                <button onClick={onDisplayedNum} value="6" type="button" className="button">6</button>
                <button onClick={onOperatorButton} value="-" type="button" className="button">-</button>
            </Row>
            <Row>
                <button onClick={onDisplayedNum} value="1" type="button" className="button">1</button>
                <button onClick={onDisplayedNum} value="2" type="button" className="button">2</button>
                <button onClick={onDisplayedNum} value="3" type="button" className="button">3</button>
                <button onClick={onOperatorButton} value="+" type="button" className="button">+</button>
            </Row>
            <Row>
                <button onClick={onOperatorButton} value="clear" type="button" className="button">Clear</button>
                <button onClick={onDisplayedNum} value="0" type="button" className="button">0</button>
                <button onClick={onDisplayedNum} value="." type="button" className="button">.</button>
                <button onClick={onOperatorButton} value="=" type="button" className="button">=</button>
            </Row>
            
        </Container>
    </>)
}

//left off making number display in the display component