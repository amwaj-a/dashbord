import React, { useEffect, useState } from 'react'
import Nav from './component/Nav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import NavTop from './component/NavTop'
import EditProfile from './component/EditProfile'
import AllIdea from './component/AllIdea'
// import Profile from './Profile'
import AllMyIdeas from './component/AllMyIdeas'

export default function HomeUser() {
  const navigate= useNavigate()

    const [data,setData]=useState([])
    let array=[]
    useEffect(() => {
  axios.get('https://667e899cf2cb59c38dc615e0.mockapi.io/user').
  then(res=>{
         
     array= res.data.filter(e=>{          
            if(e.email.includes('admin')==false)
           {
            return e
        }
        
        })
    setData(array)
    })
    }, [])
    
  return (
   <>
   {localStorage.getItem('email')!=null&&
   <div className='flex max-sm:flex-col w-full  text-2xl'   >
        
        {data.name!=undefined?
<div className="w-full h-screen justify-center items-center flex">
<span className="loading text-white loading-dots loading-lg"></span>

</div>:
<>

  <div className='w-[15%] flex max-sm:w-full   max-sm:justify-start  justify-center'> <Nav/></div>
   
    <div className="bg-[#E7E7E7] max-sm:rounded-sm
    px-8 w-full rounded-s-[2rem] h-full ">
  <NavTop/>

<AllIdea data={data}/>
{/* <EditProfile/> */}

{/* :(window.location.pathname=='/Ideas')?<AllMyIdeas/>:<></> */}
{/* } */}


   
  </div>
   </>
  

    
    
    
    
}
    
    </div> } </>
 
  )
}
