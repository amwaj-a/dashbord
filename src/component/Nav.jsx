import axios from 'axios'
import React, { useState } from 'react'
import {  Link, useNavigate, useParams } from 'react-router-dom'
import Image from './Image'

export default function Nav() {
 const params= useParams()
 const navigate=  useNavigate()

 const [user, setuser] = useState([])
 React.useEffect(() => {
    // console.log(localStorage.getItem('id'));
        axios.get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${localStorage.getItem('id')}`).then(res=>{
            setuser(res.data)
                  })
    
  
    }, [])
    
//  const navigate= useNavigate()
  return (
    // <div className="h-full max-sm:h-max">

    
    <div className=' max-sm:w-full'>
      <div className='max-sm:flex max-sm:justify-between max-sm:w-full  text-base-200 text-center max-sm:mt-1 mt-20'>    


<div className='hidden max-sm:block max-sm:flex'>
<Image dataAll={user}/>
<h1 className='mt-3 font-bold text-xl'>{user.name}</h1>

</div>
<span className='max-sm:hidden flex flex-col  justify-center w-full gap-2 '>
  <Image dataAll={user}/>
  <h1 className='mt-3 max-sm:hidden font-bold text-xl'>{user.name}</h1>
  <span className='text-sm'>{user.user}</span> 
   <span className='text-sm'>{user.email}</span>
</span>
    



    {/* {console.log(user.avatar.includes('avatar '))} */}
   {/* </button> */}



  <div className="navbar w-max  hidden max-sm:block">
  <div className="navbar-center">
    <div className="dropdown relative">
      <div tabIndex={0} role="button" className="btn btn-ghost
     btn-circle">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu bg-primary menu-sm dropdown-content  rounded-box z-[1] mt-3 absolute p-2 shadow">
        <li> <Link className='flex  visited:text-white flex-row gap-2' to={'/home'}>
   
   <svg
     xmlns="http://www.w3.org/2000/svg"
     className="h-5 w-5"
     fill="none"
     viewBox="0 0 24 24"
     stroke="currentColor">
     <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
   </svg>
   Home
   </Link></li>
   {!localStorage.getItem('email').includes('admin')&&
  <li> <Link to={`/Ideas`}  className='visited:text-white flex flex-row gap-2'>
<span className='text-white text-xl'><ion-icon name="folder-open-outline"></ion-icon>
</span> My Ideas
</Link> </li>}
        <li> <Link to={'/profile'}>
    <span className='text-white text-xl'> <ion-icon name="create-outline"></ion-icon> </span>  Profile
    </Link></li>
    <li>  <button className='text-3xl' onClick={()=>{
localStorage.removeItem('email')
localStorage.removeItem('id')

navigate('/')
}}>
  <ion-icon name="log-out-outline"></ion-icon></button>

</li>
      </ul>
    </div>
  </div>
 


</div>
  
  
  
  </div>

     <ul className="max-sm:hidden menu max-sm:mt-1 mt-20 gap-5 items-center text-base-200 w-full ">
  


  <li>

    <Link className='flex  visited:text-white flex-row gap-2' to={'/home'}>
   
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
      Home
      </Link>

  </li>
 {!localStorage.getItem('email').includes('admin')&&
  <li>

  <Link to={`/Ideas`}  className='visited:text-white flex flex-row gap-2'>
<span className='text-white text-xl'><ion-icon name="folder-open-outline"></ion-icon>
</span> My Ideas
</Link> 
{/* 
{params.id!=undefined&& 
<div className='flex flex-col'> 
<small className=' w-max'>
  <div className=' px-[6px] mx-3 inline bg-green-300'>
    </div>{count.state1}  &nbsp;Accept</small>
<small className=''> <div className=' px-[6px] mx-3 inline bg-red-300'></div>{count.state1}  &nbsp;Reject</small>
<small className=''>  <div className=' px-[6px] mx-3 inline bg-gray-300'></div>{count.state1}  &nbsp;Waiting</small>

</div>
}  */}
  </li> }

  {/* {params.id!=undefined&&  */}
   <li>

    <Link to={'/profile'}>
    <span className='text-white text-xl'> <ion-icon name="create-outline"></ion-icon> </span>  Profile
    </Link>
  </li>

</ul>

          </div>
    
  
    

  // </div>
  )
}
