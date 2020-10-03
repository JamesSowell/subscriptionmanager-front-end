import React, {useState, useEffect} from 'react';
import uuid, { v4 as uuidv4} from "uuid";

{/* keeps track of our subscriptions state through a form*/}
function SubsForm ({addSub, userEmail}){
  const [sub, setSub] = useState({
    id: "",
    sub_name: "",
    sub_price: "",
    user_email: userEmail
  });

  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      //.then(console.log);
  })

  function handleNameInputChange(e) {
    setSub({ ...sub, sub_name: e.target.value});
  }

  function handlePriceInputChange(e) {
    setSub({ ...sub, sub_price: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(sub.sub_name.trim() && sub.sub_price.trim()){
      fetch('http://localhost:3000/addsubscription', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          subName: sub.sub_name,
          subPrice: sub.sub_price,
          userEmail: sub.user_email,
          startDate: sub.start_date

        })
      })
        .then(response => response.json())
        .then(newSub =>{
          if (newSub.sub_name) {
            setSub({
              sub_name: newSub.sub_name,
              sub_price: newSub.sub_price
            })
            addSub({ ...sub, id: uuidv4() });
            // reset form
            setSub({sub_name: "", sub_price: "", user_email: userEmail});
          }
        })
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="sub_name"
        type="text"
        placeholder="Name"
        value={sub.sub_name}
        onChange={handleNameInputChange}
      />
      <input
        name="sub_name"
        type="number"
        placeholder="Price per month"
        value={sub.sub_price}
        onChange={handlePriceInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default SubsForm;
