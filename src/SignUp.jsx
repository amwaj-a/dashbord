import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import Input from './component/Input'

export default function SignUp() {
    
    const [emailExit,setEamileEixt]=useState(false)
    const [register, setregister] = useState({})
    const [ErrorData, setErrorDate] = useState({})
const [password, setPassword] = useState(false)
const navigate=useNavigate()


const createAccount=()=>{
  let req=/^[A-Za-z0-9._%+-]+(@tuwaiq)\.[A-Za-z]{2,4}$/

    if(register.name==undefined||register.password==undefined||register.email==undefined||register.user==undefined)
        {setErrorDate({...ErrorData,'password':"The field can't be empty"})}
    else if(!register.email.match(req))
        {
            
            setErrorDate({...ErrorData,'email':'email must be @tuwaiq','password':''})}

            
  else   if(register.password.length<6)
    {setErrorDate({...ErrorData,'email':'','password':'Password is too short (minimum is 6 characters)'})}

    else{
      
        axios.post('https://667e899cf2cb59c38dc615e0.mockapi.io/user',{
            'name':register.name,
            'email':register.email,
            'password':register.password,
            'user':register.user
        }).then(()=>{
            navigate('/')
        })
        setErrorDate({})

    }

}


  return (


<div className=' h-screen bg-base-200  flex justify-center items-center'>
  
  <div className='w-[30%] max-lg:w-[60%] max-md:w-[80%] bg-white px-10 rounded-lg border-black
   border-[1px] flex flex-col p-4  '>
  <img className='w-56 self-center' src={logo} alt="" />
       
        <label className="">

  Name </label>
    <input onChange={(e)=>{setregister({...register,'name':e.target.value})}} type="text" className="input input-bordered " placeholder="First Name" />
    <span className='text-red-600'> {ErrorData.name} &nbsp;</span>

    <label className="">
     {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
  </svg>  */}
  User Name </label>
    <input onChange={(e)=>{setregister({...register,'user':e.target.value})}} type="text" className="input input-bordered " placeholder="User" />
    <span className='text-red-600'> {ErrorData.user} &nbsp;</span>

  <label className="">
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
    <path
      d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
  </svg> */}
   Email </label>

<input type="text"  className="input input-bordered " onChange={(e)=>{
  
  
  
  setregister({...register,'email':e.target.value})
  
  
  
  
  }} placeholder="exmpl@tuwaiq.com" />
 <span className='text-red-600'> {ErrorData.email} &nbsp;</span>

 

<label className=" flex items-center gap-2">
  {/* <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
      clipRule="evenodd" />
  </svg> */}
  {/* <button onClick={()=>{
    setPassword(!password)
  }}>
    {!password?      <ion-icon name="eye-off-outline"></ion-icon>
:      <ion-icon name="eye-outline"></ion-icon>
}

  </button> */}
  Password
   </label>
   <Input password={password} setregister={setregister}
    setPassword={setPassword} register={register}/>

  {/* <input  onChange={(e)=>{setregister({...register,'password':e.target.value})}} placeholder='password' type={!password?"password":'text'}  className="input input-bordered "   /> */}
  <span className='text-red-600'> {ErrorData.password} &nbsp;</span>





<button  onClick={createAccount} className='bg-primary text-white p-3 rounded-lg '>SignUp</button>
<br /><span>You have an Account? <Link className='text-blue-700' to={'/'}>Back</Link></span>

<br />
</div>

</div>
  )
}
