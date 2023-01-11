import React, { useState } from 'react';
import './input.css';

interface Props {
  addTodo: AddTodo;
}

export const Input: React.FC<Props> = ({ addTodo }) => {
  const [text, setText] = useState('');
  return (
    <form>
      <input
        type="text"
        className="notes-input"
        placeholder="Новая заметка"
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
        Добавить
      </button>
    </form>
  );
};
