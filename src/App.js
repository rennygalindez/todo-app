// ->app
//   ->todos
//      ->todo

// id:int description:string done:boolean fecha: ? api:?

import React from 'react';
import Todos from './components/Todos.jsx';
import './App.css';
const todos = [
  {
    id: 1,
    description: 'hola',
    done: false,
  },
];

function App() {
  return <Todos todos={todos} />;
}

//
export default App;
