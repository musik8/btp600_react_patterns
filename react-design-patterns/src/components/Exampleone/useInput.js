import React, {Component, useEffect, useRef, useState} from 'react';

export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: (newValue) => setValue(newValue),
    bind: {
      value,
      onChange: event => {
        setValue(event.target.value);
      }
    }
  };
};