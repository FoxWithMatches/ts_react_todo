import React from 'react';
import { TodoListItem } from '../TodoListItem';

interface Props {
  todos: Todo[];
  removeTodo: removeTodo;
}

export const TodoList: React.FC<Props> = ({ todos, removeTodo }) => {
  return (
    <ul className="all-notes">
      {todos.map((todo, key: number) => (
        <TodoListItem key={key} todo={todo} removeTodo={removeTodo} />
      ))}
    </ul>
  );
};
