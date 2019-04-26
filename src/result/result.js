import React from 'react';

export function Result(props) {
  const bmi = props.bmi;

  if (!bmi) {
    return null;
  }
  let band;
  if (bmi < 18.5) {
    band = 'underweight';
  } else if (bmi >= 18.5 && bmi < 25) {
    band = 'healthy';
  } else if (bmi >= 25 && bmi < 30) {
    band = 'overweight';
  } else {
    band = 'obese';
  }

  return (
    <div>
      result: {bmi}
      <br />
      band: {band}
    </div>
  );
}
