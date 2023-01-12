import React from 'react';
import './notes-list-item.css';

interface Props {
  todo: Todo;
  removeTodo: removeTodo;
}

export const NotesListItem: React.FC<Props> = ({ todo, removeTodo }) => {
  return (
    <li className="notes-item">
      {todo.text}
      <button
        className="delete"
        onClick={() => {
          removeTodo(todo.text);
        }}
      >
        <i className="fa-solid fa-plus delete-img"></i>
      </button>
    </li>
  );
};
