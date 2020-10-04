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

  }, []);

  function showAllSubs(allSubs){
    allSubs.foreach((userSub) => {
      console.log(userSub);
      setSub({
        sub_name: userSub.sub_name,
        sub_price: userSub.sub_price
      });
      console.log(sub.sub_name, sub.sub_price);
      addSub({ ...sub, id: uuidv4() });
      // reset form
      setSub({sub_name: "", sub_price: "", user_email: userEmail});
    });
  }

  function handleLoadAllSubs(e){
    createSubComp("nose", 145);
    {/*fetch('http://localhost:3000/getsubscriptions', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: sub.user_email
      })
    })
    .then(response => response.json())
    .then(allSubs => {
      if (allSubs[0].sub_name) {
        console.log(allSubs);
        console.log(allSubs[0].sub_name,allSubs[0].sub_price.toString());
        setSub({
          sub_name: allSubs[0].sub_name,
          sub_price: allSubs[0].sub_price
        });
        console.log(sub.sub_name, sub.sub_price);
        addSub({ ...sub, id: uuidv4() });
        // reset form
        setSub({sub_name: "", sub_price: "", user_email: userEmail});
      }
    })   */}
  }

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
            console.log(newSub.sub_name, newSub.sub_price);
            createSubComp(newSub.sub_name, newSub.sub_price);
          }
        })
    }
  }

  function createSubComp(subName, subPrice) {
    setSub({
      ...sub,
      sub_name: subName,
      sub_price: subPrice
    });
    console.log(sub.sub_name, sub.sub_price);
    addSub({ ...sub, id: uuidv4() });
    // reset form
    setSub({sub_name: "", sub_price: "", user_email: userEmail});
  }

  return(
    <div>
      <div>
        <button onClick={handleLoadAllSubs}> Load all your subscriptions</button>
      </div>
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
    </div>
  );
}

export default SubsForm;
