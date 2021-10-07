import React from "react";

function TodoItem({name}: {name: string}) {
  return (
    <li>{name}</li>
  )
}

// interface PropsType {
//   name: string,
//   key?: number
// }

// function TodoItem(props: PropsType) {
//   return (
//     <li>{props.name} - {props.key}</li>
//   )
// }

export default TodoItem;