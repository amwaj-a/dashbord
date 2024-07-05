import React from 'react'
import Nav from './component/Nav'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Image from './component/Image'
// import EditProfile from './component/EditProfile'
import NavTop from './component/NavTop'

export default function HomeAdmin() {
 const navigat= useNavigate()
 let [arrayUser,setarrayUser]=React.useState([])
 let [search,setSearch]=React.useState('')
//  let [count,setCount]=React.useState(0)
//  let [countWait,setCountWait]=React.useState([])
//  let [Heddin,useHeddin]=React.useState('')
const [allData,setallData]=React.useState([])
let array=[]
// let Admin=[]
let [Admin,useAdmin]=React.useState([])


const id=localStorage.getItem('id')
// let allData=[]
  React.useEffect(() => {
    axios.get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${id}`).then(res=>{
      useAdmin(res.data)
    })
get()
  }, [])
 
  const get=()=>{axios.get('https://667e899cf2cb59c38dc615e0.mockapi.io/user').then(res=>{
 
    //  admin=res.data.find(e=>e.email.includes('admin'))
    // setarrayIdea(arrayUser.map(e=>e.Ideas))
    setarrayUser(res.data.filter(e=>{
      if(e.email.includes('admin')==false)
        {return e}
    // console.log(arrayUser);
    // arrayUser.map(e=>
    
    setallData(arrayUser)
      // if()
    }))
      // arrayIdea.map(e=>console.log(e))
      // arrayUser.filter(e=>console.log(e))
      // console.log(arrayUser);
    
    })}
  
const searchuser=()=>{

  // get()

console.log(allData);
// console.log(arrayUser);

  array= allData.filter(e=>
     {if(search===''){
      return e}
     else if(e.name.includes(search))
       {

        return e}})

setarrayUser(array);
    
    }
    
  return (
    <>
    {localStorage.getItem('email')!=null&&
    <div className='flex max-sm:flex-col  w-full  text-2xl'   >
         
         { arrayUser.name!=undefined?
 <div className="w-full h-screen justify-center items-center flex">
 <span className="loading text-white loading-dots loading-lg"></span>
 
 </div>:
 <>
 
   <div className='w-[15%] flex max-sm:w-full justify-center'> <Nav/></div>
    
     <div className="bg-[#E7E7E7] max-sm:rounded-sm
     px-8 w-full rounded-s-[2rem] h-full ">
   <NavTop/>
    <section className='flex w-full text-2xl  h-screen'>



<div className="bg-[#E7E7E7] rounded-s-[2.3rem]  overflow-hidden w-full">
  
<nav className='flex justify-between m-3'> 
        
        <div className='flex items-center '>
          <h2 className='text-3xl max-sm:text-2xl text-accent m-3 '>All Student</h2>
          <input  value={search} onChange={(e)=>{setSearch(e.target.value)}} 
          type="text" placeholder="Search"
           className="input input-bordered  md:w-auto" />
        <button className='text-lg hover:bg-[#913127] bg-[#C04334]
         btn' 
        onClick={()=>searchuser()}>Search</button> </div>

   
   
   </nav>

<br />



<table className="table
max-w-full
text-base


mx-3">
      {/* head */}
  
      <thead className='text-base'>
        <tr className=' text-gray-100 mx-3 bg-primary'>
        
          <th>Name</th>
          <th>Number of ideas</th>
          <th>Ideas are waiting</th>
          <th></th>
         
        </tr>
      </thead>
{arrayUser.length==0?
  
  <h1 className='text-xl mt-20 ml-60 text-center '>Sorry, no result found</h1>
:
      <tbody>
      {/* {console.log(arrayUser)} */}
 {arrayUser.map(e=>(
    
        <tr key={e.id} className='border-black '> 
        {/* {console.log(e)} */}
        <td>
            <div className="flex  rounded-full items-center gap-3">
            {e.avatar!==undefined
    &&e.avatar.includes('avatar ')?
    <div className="avatar placeholder">
      
  <div className="bg-slate-500 text-neutral-content w-14 rounded-full">
    <span className="text-3xl">{e.name[0]}</span>
  </div>
</div>:
       <img className='rounded-full self-center max-sm:w-10 
       max-sm:m-2  max-sm:h-10 w-14 h-14' src={e.avatar}/>
}
              <div>
               
              
                
                <div className="font-bold">{e.name}
                 <br /> <span className='font-normal'>{e.user}</span>
               
               
               
               </div>
                {/* </button>  */}
                {/* <div className="text-sm opacity-50">United States</div> */}
              </div>
            </div>
          </td>
          {/* {console.log(e.Ideas.map(i=>{console.log(i.idea);}))} */}
          {e.Ideas!==undefined&&<td>
            <ul className='flex flex-col gap-2'>
          
         <span className=''>
       {e.Ideas.length} ideas
          </span>
          
       </ul>
            <br />
          </td>}
          {e.Ideas!==undefined&&<td>
           
            {e.Ideas.filter(items=>

items.state=="Waiting"

).length} Waiting
            <br />
          </td>}
        
         <td>
         <button className='bg-secondary btn hover:text-' onClick={()=>{
navigat(`/user/${e.id}/${Admin.id}`)
               }}>
Detalis
          </button>
          
          </td>
        </tr>

))} 
      </tbody>}
    
    </table>
  </div>

    </section>
     
  </div>
  </>   
}
   
   </div> } </>
  )
}
