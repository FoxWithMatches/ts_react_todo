import React from 'react';
import { NotesListItem } from '../NotesListItem';

interface Props {
  todos: Todo[];
}

export const NotesList: React.FC<Props> = ({ todos }) => {
  return (
    <ul className="all-lists">
      {todos.map((todo) => (
        <NotesListItem key={todo.text} todo={todo} />
      ))}
    </ul>
  );
};
