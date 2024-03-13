import { useState, useReducer } from "react";
import "./App.css";
import Result from "./components/result.jsx";
import Input from "./components/input.jsx";
import Button from "./components/button.jsx";
// import Screen from "./components/screen.jsx";

const initialState = {
  num1: "",
  num2: "",
  screen: "",
  operateur: "",
  result: ""
};
const reducer = (state, action) => {
    switch (action.type) {
      case "setNum":
        const { num } = action.payload;
        return {
          ...state,
          screen: state.screen + num,
          [state.operator ? "num2" : "num1"]: state.operator
            ? state.num2 + num
            : state.num1 + num,
        };
  
      case "setOperator":
        const { operator } = action.payload;
        return {
          ...state,
          screen: state.screen + " " + operator + " ",
          operator,
        };
  
      case "calculate":
        const result = eval(state.num1 + state.operator + state.num2);
        return {
          ...state,
          screen: result.toString(),
          num1: "",
          num2: "",
          operator: "",
        };
  
      case "reset":
        return initialState;
  
      default:
        return state;
    }
  };
  
  function App() {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    const handleNum = (num) => {
      dispatch({ type: "setNum", payload: { num } });
    };
  
    const handleOperator = (operator) => {
      dispatch({ type: "setOperator", payload: { operator } });
    };
  
    const handleCalculate = () => {
      dispatch({ type: "calculate" });
    };
  
    return (
        <div className="calculatrice">
          <div className="result-section">
            <Result result={state.result} />
            <div className="screen">{state.screen}</div>
          </div>
          <div className="numbers-section">
            <Input doClick={handleNum} />
          </div>
          <div className="operators-section">
            <Button name={"+"} handleClick={() => handleOperator("+")} />
            <Button name={"-"} handleClick={() => handleOperator("-")} />
            <Button name={"x"} handleClick={() => handleOperator("*")} />
            <Button name={"/"} handleClick={() => handleOperator("/")} />
            <Button name={"="} handleClick={handleCalculate} />
            <Button name={"reset"} handleClick={() => dispatch({ type: "reset" })} />
          </div>
        </div>
      );
  }

export default App;
