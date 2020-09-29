import React from 'react';

class Welcome extends React.Component{
    render(){
      return(
        <div>
          <div>
            <div className='black f3'>
              Wames, your current entry count is...
            </div>
            <div className='blue f1'>
              5000
            </div>
          </div>
      </div>
      );
    }

}

export default Welcome;
