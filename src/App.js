import { useState } from "react";
import "./App.css";
import { Heading } from "./components/Heading.js";
import { Input } from "./components/Input.js";
import { Button } from "./components/Button.js";

function App() {
  const [counter, setCounter] = useState(0);
  const [maxValue, setMaxValue] = useState(Infinity);
  const [minValue, setMinValue] = useState(-Infinity);
  const [step, setStep] = useState(1);

  const handleIncrease = () => {
    if (counter + step > maxValue) return;
    setCounter(counter + step);
  };

  const handleDecrease = () => {
    if (counter - step < minValue) return;
    if (counter - step < 0) {
      setCounter(0);
      return;
    }
    setCounter(counter - step);
  };

  const handleReset = () => {
    setCounter(0);
  };

  const handleMaxValue = (e) => {
    const value = e.target.value;
    if (value < 0) return;
    setMaxValue(value);
  };

  const handleMinValue = (e) => {
    const value = e.target.value;
    if (value < 0) return;
    setMinValue(value);
  };

  const handleStep = (e) => {
    const value = e.target.value;
    setStep(Number(value));
  };

  return (
    <div id="main-container">
      <Heading type="h1" text="Counter App" />
      <div id="input-container">
        <Input
          type="number"
          pHolder="Max Value"
          handleChange={handleMaxValue}
        />
        <Input
          type="number"
          pHolder="Min Value"
          handleChange={handleMinValue}
        />
        <Input type="number" pHolder="Step" handleChange={handleStep} />
      </div>
      <p>{counter}</p>
      <div id="button-container">
        <Button handleClick={handleIncrease} text="Increase" />
        <Button handleClick={handleDecrease} text="Decrease" />
        <Button handleClick={handleReset} text="Reset" />
      </div>
    </div>
  );
}

export default App;
