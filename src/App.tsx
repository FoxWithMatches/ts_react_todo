import React from 'react';
import './App.css';
import { Notes } from './Notes';
import { Lists } from './Lists';

function App() {
  return (
    <div className="App">
      <Lists />
      <Notes />
    </div>
  );
}

export default App;
