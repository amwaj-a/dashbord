import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from './component/Input'
import logo from './assets/logo.png'

export default function Login() {
    
    
    const [register, setregister] = useState({})
    const [ErrorData, setErrorDate] = useState({})
const [password, setPassword] = useState(false)
const navigate=useNavigate()
React.useEffect(() => {



}, [])

const createAccount=()=>{


    axios.get('https://667e899cf2cb59c38dc615e0.mockapi.io/user').then(res=>{
            
        const found= res.data.find(e=>e.email==register.email)
        if(register.email==undefined||register.password==undefined)
            {setErrorDate({...ErrorData,'password':"Enter email and password"})}
       else      if(found==undefined)
        {setErrorDate({...ErrorData,'password':"couldn't find your account"})}
       else if(found.password!=register.password)
        {setErrorDate({...ErrorData,'password':"Password uncorrect"})}
else{
    {
        localStorage.setItem('email',register.email)
        localStorage.setItem('id',found.id)
        
        setErrorDate({...ErrorData,'password':""})}
        navigate('/home')
}       })


}


  return (



<div className=' h-screen bg-base-200  flex justify-center items-center'>
  
  <div className='w-[30%] max-lg:w-[60%] max-md:w-[80%] bg-white px-10 rounded-lg border-black
   border-[1px] flex flex-col p-4  '>
  <img className='w-56 self-center' src={logo} alt="" />
        
<label className="">

<span>Email</span>
  </label>

<input type="text"  className="input input-bordered " onChange={(e)=>{setregister({...register,'email':e.target.value})}}
 placeholder="exmpl@tuwaiq.com" />
<span> {ErrorData.email} &nbsp;</span>



<label className=" flex items-center gap-2">
Password
 </label>
 <Input password={password} setregister={setregister} setPassword={setPassword} register={register}/>
<span className='text-red-600 '> {ErrorData.password} &nbsp;</span>




<br />
<button onClick={createAccount}
 className='bg-primary text-white p-3 rounded-lg'>
  
  
  Login
  {/* <span className='text'><ion-icon name="log-in-outline"></ion-icon></span> */}
  
  </button>
  <br />
<span>Don't have an Account? <Link className='text-blue-700' to={'/SignUp'}>Create Account</Link></span>

<br />


</div></div>


  )
}
