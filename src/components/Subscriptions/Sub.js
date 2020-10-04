import React from 'react';


function Sub({sub, removeSub}) {

  function handleRemoveClick(){
    fetch('http://localhost:3000/deletesubscription', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        subName: sub.sub_name,
        userEmail: sub.user_email
      })
    })
      .then(response => response.json())
      .then(outcome => {
        if(outcome == 'sub erased'){
          removeSub(sub.id);
        }
      });
  }

  return (
    <div style={{display: 'flex', justifyContent:'flex-center'}}>
        <li
          style={{
            color: "black",
          }}
        >{sub.sub_name} {sub.sub_price}
        </li>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  )

}

export default Sub;
