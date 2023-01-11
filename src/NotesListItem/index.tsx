import React from 'react';
import './notes-list-item.css';

interface Props {
  todo: Todo;
}

export const NotesListItem: React.FC<Props> = ({ todo }) => {
  return (
    <li className="notes-item">
      {todo.text}
      <button className="delete">
        <i className="fa-solid fa-plus delete-img"></i>
      </button>
    </li>
  );
};
