import React, {useState, useEffect} from 'react';
import uuid, { v4 as uuidv4} from "uuid";

function RetrieveSubs({addSub, userEmail}){
  const [sub, setSub] = useState({
    id: "",
    sub_name: "",
    sub_price: "",
    user_email: userEmail,
    isLoaded: false
  });


  function handleLoadAllSubs(e){

    fetch('http://localhost:3000/getsubscriptions', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: sub.user_email
      })
    })
    .then(response => response.json())
    .then(allSubs => {
      if (allSubs) {
        for(var i=0; i< allSubs.length; i++){
          setSub({
            sub_name: allSubs[i].sub_name,
            sub_price: allSubs[i].sub_price,
            user_email: userEmail
          });
        }
      }
      setSub({ ...sub, isLoaded: true});
    })
  }

  function createSubComp(){
    if(sub.sub_name && sub.sub_price){
      addSub({ ...sub, id: uuidv4() });
      console.log(sub.sub_name, sub.sub_price, sub.user_email);
    }
  }

  useEffect(createSubComp, [sub]);

  return(
    <div>
    { sub.isLoaded === false
      ?
      <button
        className="b pa2 ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        onClick={handleLoadAllSubs}> Load all your subscriptions</button>
      : <legend className="f3 white ba w-15 pa2 fw6 ph0 mh0 pv2  b--black  f6 dib ba bg-black hover-white w-15">all Subscriptions are loaded</legend>
    }
    </div>
  );

}

export default RetrieveSubs;
