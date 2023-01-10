import React, { ChangeEvent, useState } from 'react';
import './input.css';

type InputType = {
  placeholder: string;
  titleButton: string;
};

export const Input = (props: InputType) => {
  const { placeholder, titleButton } = props;
  const [value, setValue] = useState('');

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <form>
      <input
        type="text"
        className="notes-input"
        placeholder={placeholder}
        onChange={changeHandler}
        value={value}
      />
      <button className="btn-notes">{titleButton}</button>
    </form>
  );
};
