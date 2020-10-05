import React, {useState, useEffect} from 'react';
import uuid, { v4 as uuidv4} from "uuid";

function SubsForm ({addSub, userEmail}){
  const [sub, setSub] = useState({
    id: "",
    sub_name: "",
    sub_price: "",
    user_email: userEmail
  });

  function handleNameInputChange(e) {
    setSub({ ...sub, sub_name: e.target.value});
  }

  function handlePriceInputChange(e) {
    setSub({ ...sub, sub_price: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(sub.sub_name.trim() && sub.sub_price.trim()){
      fetch('https://enigmatic-wave-54910.herokuapp.com/addsubscription', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          subName: sub.sub_name,
          subPrice: sub.sub_price,
          userEmail: sub.user_email
        })
      })
        .then(response => response.json())
        .then(newSub =>{
          if (newSub.sub_name) {
            console.log(newSub.sub_name, newSub.sub_price);
            addSub({ ...sub, id: uuidv4() });
            // reset form
            setSub({sub_name: "", sub_price: "", user_email: userEmail});
          }
        })
    }
  }



  return(
    <div>

      <form onSubmit={handleSubmit}>
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15"
          name="sub_name"
          type="text"
          placeholder="Name"
          value={sub.sub_name}
          onChange={handleNameInputChange}
        />
        <input
          className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-15"
          name="sub_name"
          type="number"
          placeholder="Price per month"
          value={sub.sub_price}
          onChange={handlePriceInputChange}
        />
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default SubsForm;
