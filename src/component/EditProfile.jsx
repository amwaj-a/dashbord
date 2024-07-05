import axios from 'axios';
import React, { useState } from 'react'
import NavTop from './NavTop';
import Nav from './Nav';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
  const navigate=useNavigate()
    const [register, setregister] = React.useState([]);
const id=localStorage.getItem('id')
    React.useEffect(() => {
        get()
        }, []);

       const get=()=>{    axios
        .get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${id}`)
        .then((res) => {
                 res.data  
         // console.log(res.data);
          setregister(res.data)
   
      
        })} 
    const save=()=>{
        console.log(register);
        axios.put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${id}`,{
          'name':register.name,
          'user':register.user,
          'avatar':register.avatar
        }).then(e=>{
            get()
            navigate('/home')
        })
    
      }
  return (
          <>
           {localStorage.getItem('email')!=null&&
     <section className='flex max-sm:flex-col h-screen w-full  text-2xl'   >
    {register.name==undefined?
<div className="w-full h-screen justify-center items-center flex">
<span className="loading text-white loading-dots loading-lg"></span>

</div>:
 
    
       


    <>

   <div className='w-[15%] flex max-sm:w-full  max-sm:justify-start  justify-center'> <Nav/></div>
   
   <div className="bg-[#E7E7E7] max-sm:rounded-sm
   px-8 w-full rounded-s-[2rem] h-full ">
 <NavTop/>
 <br />
    <section  className="card w-max m-auto h-max
      card-side bg-base-100 shadow-xl">
        <div className="card-body border w-max items-center ">
          <h2 className="card-title">Edit Profile</h2>
          {/* <p>Click the button to watch on Jetflix app.</p> */}
          {/* <h2>ideas</h2> */}
          <div className="flex flex-col gap-4  text-lg w-96">
             {/* <div className=' h-screen  flex justify-center items-center'> */}
  {/* <div className='w-[40%] border-black border-[1px] flex flex-col p-4  gap-1'> */}
       
        <label className="">

  Name 
</label>

    <input  value={register.name}  
    onChange={(e)=>{setregister({...register,'name':e.target.value})}} 
    type="text" className="input mx-2 input-bordered " 
    placeholder="First Name" />
    {/* <span className='text-red-600'> {ErrorData.name} &nbsp;</span> */}
    <label className="">

  User 
</label>

    <input value={register.user} onChange={(e)=>{setregister({...register,'user':e.target.value})}} type="text" className="mx-3 input input-bordered " placeholder="User" />

<label className="">

avatar 
</label>

  <input onChange={(e)=>{setregister({...register,'avatar':e.target.value})}} type="text" className="mx-3 input input-bordered " placeholder="URL img" />
{/* </div> */}

{/* </div> */}












          </div>

       
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn hover:bg-[#52655c]  w-96 mt-3 bg-secondary text-white"
              onClick={() =>
                save()
                //  document.getElementById("my_modal_3").showModal()
                }
            >
              Save 
            </button>
         

       
          </div>
        </section>
        </div>
      </>
  }  </section>    }  </>
   
  )
}
