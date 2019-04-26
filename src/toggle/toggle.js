import React from 'react';

export function Toggle(props) {
  return (
    <>
      current: {props.currentOption}
      <br />
      {props.options.map(function(option) {
        return (
          <button
            key={option}
            onClick={function() {
              props.onSelection(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </>
  );
}
