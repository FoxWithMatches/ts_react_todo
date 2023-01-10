import React from 'react';
import './notesList.css';

export const NotesList = () => {
  return (
    <li className="notes-item">
      Milk
      <button className="delete">
        <i className="fa-solid fa-plus delete-img"></i>
      </button>
    </li>
  );
};
