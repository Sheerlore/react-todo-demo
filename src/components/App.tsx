import React from 'react';
import TodoList from './TodoList';


const data = [
  {name: "hello"},
  {name: "goodbye"},
  {name: "sayonara"},
];

function App() {
  return (
    <div>
      <h1>TodoApp</h1>
      <TodoList data={data} />
    </div>
  )
}

export default App;