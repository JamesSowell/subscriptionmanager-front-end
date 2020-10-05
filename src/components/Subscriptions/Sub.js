import React from 'react';


function Sub({sub, removeSub}) {

  function handleRemoveClick(){
    fetch('https://enigmatic-wave-54910.herokuapp.com/deletesubscription', {
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
    <div style={{display: 'flex', justifyContent:'center'}}>
        <ol
          style={{
            color: "DarkSlateGrey",
          }}
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15"
        >{sub.sub_name} ${sub.sub_price}
        </ol>
      <button onClick={handleRemoveClick}>X</button>
    </div>
  )

}

export default Sub;
