import React from 'react';
import { Header } from '../Header';
import { Input } from '../Input';
import { NotesList } from '../NotesList';
import './notes.css';

export const Notes = () => {
  return (
    <div className="notes">
      <Header title={'Заметки'} />
      <NotesList />
      <Input placeholder={'Добавить заметку'} titleButton={'Новая заметка'} />
    </div>
  );
};
