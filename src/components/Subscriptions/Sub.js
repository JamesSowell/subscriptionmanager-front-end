import React from 'react';


function Sub({sub, removeSub}) {

  function handleRemoveClick(){
    removeSub(sub.id);
  }

  return (
    <div style={{display: "flex"}}>
      <input type="checkbox" />
        <li
          style={{
            color: "black",
            textDecoration: sub.completed ? "Line-through" : null
          }}
        >{sub.task}
        </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  )
}

export default Sub;
