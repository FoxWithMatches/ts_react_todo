import React, { useState } from 'react';
import { Header } from '../Header';
import { Input } from '../Input';
import { NotesList } from '../NotesList';
import './notes.css';

const initialTodo: Todo[] = [
  {
    text: 'Walk the dog',
  },
  {
    text: 'Write app',
  },
];

export const Notes = () => {
  const [todos, setTodos] = useState(initialTodo);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text };
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="notes">
      <Header title={'Заметки'} />
      <NotesList todos={todos} />
      <Input addTodo={addTodo}/>
    </div>
  );
};
