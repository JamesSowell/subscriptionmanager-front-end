import React from 'react';
import Sub from './Sub'

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
