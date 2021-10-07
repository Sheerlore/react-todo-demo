import React from 'react';
import TodoItem from './TodoItem';

interface DataType {
  name: string
}

function TodoList({data}: {data: Array<Object>}) {
  return (
    <ul>
      {
        data.map((item: DataType, i) => (
          <TodoItem key={i} name={item.name} />
        ))
      }
    </ul>
  )
}

export default TodoList;