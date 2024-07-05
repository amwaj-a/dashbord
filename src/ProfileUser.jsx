import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Nav from './component/Nav'
import NavTop from './component/NavTop'
import Image from './component/Image'

export default function ProfileUser() {
  const params= useParams().id
  const Admin= useParams().idman
  const [dataAll,useData]= useState([])
   const [AdminDta,useAdmin]= useState([])
   const [idea,useIdea]= useState('')
   const [indexArray,useindexArray]= useState(0)
   let arrayReject=[]
   const navigat=useNavigate()
   React.useEffect(() => {
getDate()
// console.log(Admin);
   }, [])
   const getDate=()=>{
    axios.get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${Admin}`).then(res=>{
      // console.log(res.data);
      useAdmin(res.data)
      


    })
    axios.get(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`).then(res=>{
      // console.log(res.data);
      useData(res.data)



    })
   }
const handelState=(value,index,reason)=>{
  let ArrayState=[]
  --index
  ArrayState=dataAll.Ideas

// console.log(index);
// ArrayState=dataAll.Ideas[index]
if(value=='Reject')
  {
// console.log(reason);
// ArrayState[index].state=value
ArrayState[index].reason=reason

// console.log(ArrayState);

  }
ArrayState[index].state=value
// console.log(ArrayState);

axios.put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`,{
  Ideas:ArrayState
}).then(_=>{
  if(value=='Accept')
{  document.getElementById('my_modal_11').showModal()
} 
 getDate()

})



// console.log(value);
}
const addIdea=(e)=>{
 
  let arrayIdea=[]
  --e
  // console.log(e);

  arrayIdea=dataAll.Ideas
  arrayIdea[e].idea=idea
  // console.log(arrayIdea);

 


  axios.put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`,{
      Ideas:arrayIdea
  })
  .then(e=>{
// useData(e.data)
getDate()


})
  // useSaveIdea(idea)



}
const deleteAccount=()=>{
  // console.log();
  if(confirm(`'Are you suer delete Account ${dataAll.name} ?`))
    {
  axios.delete(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`).then(_=>navigat('/home'))

    }
}

   const deleteIdea=(index)=>{
    let arrayRest=[]
    --index
    arrayRest=dataAll.Ideas
    arrayReject.push(dataAll.Ideas[index])

// console.log(arrayRest);
 arrayRest.splice(index,1)
// console.log(arrayRest);
axios.put(`https://667e899cf2cb59c38dc615e0.mockapi.io/user/${params}`,{
  IdeasReject:arrayReject,
  Ideas:arrayRest
})
.then(_=>{
 
  getDate()
})


   }
  return (
    <>
    {console.log(dataAll.name!=undefined)}
    {localStorage.getItem('email')!=null&&
    <div className='flex max-sm:flex-col  w-full  text-2xl'   >
         
         { dataAll.name==undefined?
 <div className="w-full h-screen justify-center items-center flex">
 <span className="loading text-white loading-dots loading-lg"></span>
 
 </div>:
 <>
 
   <div className='w-[15%] flex max-sm:w-full max-sm:justify-start  justify-center'> <Nav/></div>
    
     <div className="bg-[#E7E7E7] max-sm:rounded-sm
     px-8 w-full rounded-s-[2rem]  ">
   <NavTop/>
    <section className='flex w-full text-2xl '>




    <div className="h-full ">
        
          
          {/* You can open the modal using document.getElementById('ID').showModal() method */}
{/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
<dialog id="my_modal_11" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">Done!</h3>
    <p className="py-4"></p>
  </div>
</dialog>
             
      </div>
    {/* </div> */}
    
    
    <div className="bg-[#E7E7E7] rounded-s-[2.3rem]  overflow-hidden w-full">
      
        {/* <card/> */}
        <div className="card mx-5 card-side bg-base-100 shadow-xl">
 
  <div className="card-body ">
  Student Info
  <hr className='border-2 '/>
    <h2 className=" card-title flex justify-between">
      
      <span className=' mb-5 max-sm:m-2 flex flex-col  items-center' >
      <Image dataAll={dataAll}/>
        {/* <img className='w-20 rounded-full h-20' src={dataAll.avatar} alt="" /> */}
      {dataAll.name}
      
<span className='text-sm font-normal'>
{dataAll.user}
</span>      </span>
    <button onClick={deleteAccount} className='text-red-600'> Delete Account</button>
    </h2>
    {/* <p>Click the button to watch on Jetflix app.</p> */}
    {/* <h2>ideas</h2> */}
    <div className="">
  <table className="table ">
    {/* head */}
    <thead className='text-lg'>
      <tr>
        <th></th>
        <th>idea</th>
        <th>State</th>
        <th>Change State</th>
      </tr>
    </thead>
    <tbody>

        {/* { */}
         {dataAll.Ideas!=undefined&&
         dataAll.Ideas.map((e,index)=>(
    <tr key={index} className={e.state=='Accept' ?"text-green-500 max-h-10  bg-base-200  text-lg *:":(e.state=='Modify')?"text-amber-500  text-lg  bg-base-200 ":(e.state=='Reject')?"text-red-500  text-lg  bg-base-200 ":"  text-lg  bg-base-200"}>
     
    <th>{++index}</th>
    <td  className='overflow-auto'>{e.idea}  </td>
    <td  className=' max-sm:text-end'>{e.state}
      <br />
      {
        e.reason!==undefined&& 
                 <span className="badge text-red-500  badge-ghost badge-sm">{e.reason}</span>
}
    {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}

    </td>
    <td className=' max-sm:text-end'> 
      
      
{
        e.reason!==undefined? 
        <button onClick={()=>{deleteIdea(index)}} className='text-red-700 text-xl'><ion-icon name="close-outline"></ion-icon></button> 


:
      
      <details className='menu-vertical '>
          <summary >State</summary>
          <ul className=" text-primary absolute px-5 rounded-lg  font-mono text-lg bg-base-200 shadow-lg  rounded-t-none p-2 ">
          <li><button value='Accept' onClick={(e,i)=>handelState(e.target.value,index)}>


            
            Accept</button></li>
          <li><button value='Modify' onClick={(e)=>
            {
            useindexArray(index)

              document.getElementById('my_modal_3').showModal()  
               handelState(e.target.value,index)
            
            
             }}>
            Modify
            
            </button></li>
          <li>
          
            <button value='Reject' onClick={(e,i)=>
               {
 
                let reason=  prompt('your sure delete idea ? \n why?')
                if(reason!=null)
                  { handelState(e.target.value,index,reason)}
                
                
                 }}>
            Reject
            
            
            
            </button>
            
            
            </li>
          </ul>

        </details>}
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box btn-secondary">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-primary btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 className="font-bold text-lg">{e.idea}</h3>
  <h2 className="py-4 px-4">What your Edit.?</h2>
  
  <textarea value={idea} onChange={(e)=>{useIdea(e.target.value)}} className="textarea textarea-bordered w-full" placeholder="Bio"/>
<br />
<form method="dialog">

      <button onClick={()=>{
        
        
        
        addIdea(indexArray)}} className='btn w-full text-lg btn-primary '>send</button>
        </form>

  </div>
</dialog></td>



  </tr>
        ))} 


    </tbody>
  </table>
</div>



    <div className="card-actions justify-end">
<br /><br />


    </div>
  </div>

</div>

<br />
    </div>
    </section>
     
     </div>
     </>   
   }
      
      </div> } </>
  )
}
