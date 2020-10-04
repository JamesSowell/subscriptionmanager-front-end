import React, {useState, useEffect} from 'react';

function Total ({subs}){
  const [total, setTotal] = useState(0);

  useEffect(() =>{
      var tot =0;
      for(var i =0; i< subs.length; i++){
        tot += parseInt(subs[i].sub_price);
      }
      setTotal(tot);
  }, [subs]);

  useEffect(()=>{
    console.log(total);
  },[total]);


  return(
    <p className=" Gray b pa ph3 pv2 input-reset ba b--black f6 dib">TOTAL COST PER MONTH: ${total}</p>
  );
}

export default Total;
