import React, {useState} from 'react';
import Welcome from '../Welcome/Welcome';
import SubsForm from '../Subscriptions/SubsForm';
import SubsList from '../Subscriptions/SubsList';

function Profile (){
    const [subs, setSubs] = useState([]);

    function addSub(sub) {
      setSubs([sub, ...subs]);
    }

    function removeSub(id) {
      setSubs(subs.filter(sub =>sub.id !== id));
    }

    return (
    <div>
      <Welcome/>
      <p> Subscriptions </p>
      <SubsForm addSub={addSub} />
      <SubsList
        subs={subs}
        removeSub={removeSub}
      />
    </div>
  );
}

export default Profile;
