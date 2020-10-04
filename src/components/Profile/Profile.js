import React, {useState, useEffect} from 'react';
import SubsForm from '../Subscriptions/SubsForm';
import SubsList from '../Subscriptions/SubsList';

function Profile ({userEmail}){
    const [subs, setSubs] = useState([]);

    function addSub(sub) {
      setSubs([sub, ...subs]);
    }

    function removeSub(id) {
      setSubs(subs.filter(sub =>sub.id !== id));
    }

    return (
    <div>
      <p> Add your subscription and price per month</p>
      <SubsForm
        addSub={addSub}
        userEmail={userEmail}
      />
      <SubsList
        subs={subs}
        removeSub={removeSub}
      />
    </div>
  );
}

export default Profile;
