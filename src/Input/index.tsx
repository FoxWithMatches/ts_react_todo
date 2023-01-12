import React, { useState } from 'react';
import './input.css';

interface Props {
  addTodo: AddTodo;
  placeholder: string;
  labelButton: string;
}

export const Input: React.FC<Props> = ({ addTodo, placeholder, labelButton }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input
        type="text"
        className="notes-input"
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        type="submit"
        className="btn-notes"
        onClick={(e) => {
          e.preventDefault();
          addTodo(text);
          setText('');
        }}
      >
        {labelButton}
      </button>
    </form>
  );
};
