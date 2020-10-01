import React from 'react';

const Welcome = ({name, email}) => {

      return(
        <div>
          <div>
            <div className='black f3'>
              {`Welcome ${name}, here are your`}
            </div>
            <div className='blue f1'>
              SUBSCRIPTIONS
            </div>
          </div>
      </div>
      );


}

export default Welcome;
