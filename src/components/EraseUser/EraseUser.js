import React, {useState} from 'react';

function EraseUser({userEmail}) {
  const [accEmail, setAccEmail] = useState(userEmail);

  function EraseUser() {
    fetch('https://enigmatic-wave-54910.herokuapp.com/deleteaccount', {
      method: 'delete',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: accEmail
      })
    })
      .then(response => response.json())
      .then(outcome => {
        if(outcome == 'successfully erased User'){
          window.location.reload(false);
        }
      })
      .catch(err => console.log("ok so this didn't work"));
  }

  return (
    <nav style={{display: 'flex', justifyContent:'flex-end'}}>
      <p onClick={EraseUser} className='f4 link dim red underline pa1 pointer'>DELETE YOUR ACCOUNT</p>
    </nav>
  );
}

export default EraseUser;
