import React from 'react';
import { NotesListItem } from '../NotesListItem';

interface Props {
  todos: Todo[];
  removeTodo: removeTodo;
}

export const NotesList: React.FC<Props> = ({ todos, removeTodo }) => {
  return (
    <ul className="all-lists">
      {todos.map((todo, key: number) => (
        <NotesListItem key={key} todo={todo} removeTodo={removeTodo}/>
      ))}
    </ul>
  );
};
