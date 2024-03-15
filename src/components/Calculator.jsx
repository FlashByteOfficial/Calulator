import { useState } from "react";
import calcStyles from "../styles/Calculator.module.css";
import Button from "./Button.jsx";
import Input from "./Input.jsx";

const Calculator = () => {
  const [inputValue, setInputValue] = useState("");

  const [counter, setCounter] = useState(0);

  const buttons = Array.from("1234567890+-*/");

  const handleClick = (event) => {
    if (event.target.textContent.toLowerCase() === "clear") {
      setInputValue("");
    } else if (event.target.textContent === "=") {
      try {
        setInputValue(eval(inputValue).toString());
      } catch (error) {
        setInputValue("Error");
      }
    } else {
      setInputValue(inputValue + event.target.textContent);
    }
  };

  return (
    <div className={calcStyles.calculator}>
      <Input val={inputValue}></Input>

      <Button btns={buttons} funcHandleClick={handleClick} />
    </div>
  );
};

export default Calculator;
