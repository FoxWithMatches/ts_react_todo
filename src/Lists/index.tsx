import React, { useState } from 'react';
import { Header } from '../Header';
import { TodoList } from '../TodoList';
import { Input } from '../Input';
import './lists.css';

export const Lists = () => {
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
    <div className="lists">
      <Header title={'Списки'} />
      <div className='all-lists'>
        <TodoList todos={todos} removeTodo={removeTodo} />
      </div>
      <Input addTodo={addTodo} />
    </div>
  );
};
