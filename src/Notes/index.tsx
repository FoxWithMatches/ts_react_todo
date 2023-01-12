import React, { useState } from 'react';
import { Header } from '../Header';
import { Input } from '../Input';
import { NotesList } from '../NotesList';
import './notes.css';

export const Notes = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text };
    setTodos([...todos, newTodo]);
  };

  const removeTodo: removeTodo = (todoNameToRemove: string) => {
    setTodos(
      todos.filter((todo) => {
        return todo.text !== todoNameToRemove;
      }),
    );
  };

  return (
    <div className="notes">
      <Header title={'Общие'} />
      <NotesList todos={todos} removeTodo={removeTodo} />
      <Input addTodo={addTodo} placeholder={'Новая заметка'} labelButton={'Добавить'} />
    </div>
  );
};
