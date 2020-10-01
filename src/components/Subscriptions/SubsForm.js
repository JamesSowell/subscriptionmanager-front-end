import React, {useState} from 'react';
import uuid, { v4 as uuidv4} from "uuid";

{/* keeps track of our subscriptions state through a form*/}
function SubsForm ({addSub}){
  const [sub, setSub] = useState({
    id: "",
    sub_name: ""
  });

  function handleTaskInputChange(e) {
    setSub({ ...sub, sub_name: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(sub.sub_name.trim()){
      addSub({ ...sub, id: uuidv4() });
      // reset task input
      setSub({ ...sub, sub_name: ""});
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="sub_name"
        type="text"
        value={sub.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default SubsForm;
