import React from 'react'

function Input(props) {
    const key=props.name
  return (
<label className="input input-bordered flex justify-between ">
 <input  
 onChange={(e)=>{props.setregister({...props.register,'password':e.target.value})}}
  placeholder='password' type={!props.password?"password":'text'}  
 className=""   />

 <button onClick={()=>{
  props.setPassword(!props.password)
}}>
  {/* {!props.password?      <ion-icon name="eye-off-outline">
    
  </ion-icon>
:      <ion-icon name="eye-outline"></ion-icon>
} */}

</button>
 </label>  
  )
}

export default Input