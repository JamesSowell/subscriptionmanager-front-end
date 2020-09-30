import React, {useState} from 'react';
import uuid, { v4 as uuidv4} from "uuid";

{/* keeps track of our subscriptions state through a form*/}
function SubsForm ({addSub}){
  const [sub, setSub] = useState({
    id: "",
    task: "",
    completed: false
  });

  function handleTaskInputChange(e) {
    setSub({ ...sub, task: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    if(sub.task.trim()){
      addSub({ ...sub, id: uuidv4() });
      // reset task input
      setSub({ ...sub, task: ""});
    }
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        name="task"
        type="text"
        value={sub.task}
        onChange={handleTaskInputChange}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default SubsForm;
