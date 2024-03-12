import React, { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (e, inputNumber) => {
    const { value } = e.target;
    if (inputNumber === 1) {
      setInput1(value);
    } else {
      setInput2(value);
    }
  };

  const handleCalculator = (op) => {
    try {
      const num1 = parseFloat(input1);
      const num2 = parseFloat(input2);

      if (isNaN(num1) || isNaN(num2)) {
        setResult("Invalid input");
        return;
      }

      switch (op) {
        case "add":
          setResult((num1 + num2).toString());
          break;
        case "multiply":
          setResult((num1 * num2).toString());
          break;
        default:
          setResult("Error");
      }
    } catch (error) {
      setResult("Error");
    }
  };

  const handleReset = () => {
    setInput1("");
    setInput2("");
    setResult("");
  };

  return (
    <div className="calculatrice">
      <div>
        <input
          type="text"
          onChange={(e) => handleChange(e, 1)}
          value={input1}
          placeholder="Numero 1"
        />
        <button onClick={() => handleCalculator("add")}>+</button>
        <button onClick={() => handleCalculator("multiply")}>x</button>
        <input
          type="text"
          onChange={(e) => handleChange(e, 2)}
          value={input2}
          placeholder="Numero 2"
        />
      </div>
      <div>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div>
        <p>Result: {result}</p> 
      </div>
    </div>
  );
};

export default Calculator;
