import React from 'react';

export function Input(props) {
  return (
    <>
      <label htmlFor={props.id}> {props.label} </label>
      <input id={props.id} type="number" onChange={props.onBlur} />
    </>
  );
}
