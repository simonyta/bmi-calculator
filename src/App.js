import React from 'react';
import './App.css';
import { Input } from './input/input';
import { Result } from './result/result';
import { Toggle } from './toggle/toggle';

export function App() {
  const [weight, setWeight] = React.useState();
  const [height, setHeight] = React.useState();
  const [units, setUnits] = React.useState('metric');

  function onValueChange(event) {
    if (event.target.id === 'weight') {
      setWeight(event.target.value);
    } else if (event.target.id === 'height') {
      setHeight(event.target.value);
    }
  }

  function handleSelection(option) {
    setUnits(option);
  }

  let bmi;
  if (height && weight) {
    bmi = calculateBMI(weight, height, units);
  }

  return (
    <>
      <Toggle options={['metric', 'imperial']} currentOption={units} onSelection={handleSelection} />
      <br />
      <Input id="weight" label="Weight" onBlur={onValueChange} />
      <br />
      <Input id="height" label="Height" onBlur={onValueChange} />
      <Result bmi={bmi} />
    </>
  );
}

function calculateBMI(weight, height, units) {
  let bmi = Math.abs(weight) / Math.pow(height, 2);
  if (units === 'metric') {
    if (height > 3) {
      bmi = bmi * 10000;
    }
    return bmi;
  } else if (units === 'imperial') {
    return bmi * 703;
  }
}
