import React from 'react';
import './App.css';
import { Input } from './input/input';
import { Result } from './result/result';

let weight;
let height;

export function App() {
  const [bmi, setBmi] = React.useState();

  function onValueChange(event) {
    if (event.target.id === 'weight') {
      weight = event.target.value;
    } else if (event.target.id === 'height') {
      height = event.target.value;
    }

    if (height && weight) {
      setBmi(Math.abs(weight / Math.pow(height, 2)));
    }
    if (!event.target.value) {
      setBmi(undefined);
    }
  }

  return (
    <>
      <Input id="weight" label="Weight" onBlur={onValueChange} />
      <br />
      <Input id="height" label="Height" onBlur={onValueChange} />
      <Result bmi={bmi} />
    </>
  );
}
