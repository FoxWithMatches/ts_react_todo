import React from 'react';
import './todoList.css'

interface Props {
  todo: Todo;
  removeTodo: removeTodo;
}

export const TodoListItem: React.FC<Props> = ({ todo, removeTodo }) => {
  return (
    <li className="list-item">
      {todo.text}
      <div className="nav-arrow">
        <p className="num-item"></p>
        <div className="arrow"></div>
      </div>
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
