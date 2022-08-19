import React, { Component, useState } from 'react'
import './payment.css'
const Payment = () => {
    const [avatarImageURL,setAvatar] = useState();
    const [selected, setSelected] = useState('biff');
    let itemList = ['Gpay', 'Paytm','Paypal','Visa','MasterCard']

    
    function onChangeValue(e){
        setSelected(e.target.value);
    }
    function handleSubmit(){
        console.log(selected)
    }
  return (
    <div>
        <div className='avatar-container' onChange={onChangeValue}>
            {
            itemList.map((item,i)=>{
              return(
              <div>
                <input name='avatar' id={item} type='radio' value={item} />
                <label className='avatar-label' htmlFor={item} > 
                  <div className='avatar-component'>
                     {item}
                     
                  </div>
                </label>
              </div>
              )
            })
            }
          </div>
          <button onClick={handleSubmit} > Submit </button>
    </div>
  )
}

export default Payment