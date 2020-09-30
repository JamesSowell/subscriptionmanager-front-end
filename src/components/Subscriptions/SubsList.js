import React from 'react';
import Sub from './Sub'

{/* keeps track of our subscriptions state through a form*/}
function SubsList ({subs, removeSub}) {
    return(
      <ul>
        {subs.map(sub => (
          <Sub
            key={sub.id}
            sub={sub}
            removeSub={removeSub}
          />
        ))}
      </ul>
    );
}

export default SubsList;
