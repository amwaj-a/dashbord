import React from 'react'

export default function AllIdea({data}) {
  return (

<>  <h1 className='text-3xl'>Accepted Ideas </h1>
  <p className='w-96 mt-2 text-base'>All accepted ideas are presented to avoid repetition.</p>
   <br />
   <section className='flex '>
    {/* <div className=' my-6 bg-white px-3 w-[40%] text-lg'>
        {data.map(e=>(
            <>
            
            {e.id==localStorage.getItem('id')&&e.Ideas.map(items=>(
items.state=='Waiting'?<h1>{items.state}
</h1>:<li>{items.idea}</li>
))}
            </>
        ))}
      {console.log(data)}
    </div> */}
     <table className="table max-sm:justify-center border-base-200 my-6  px-3 w-[90%] text-lg">
      {/* head */}
      <thead >
        <tr className='text-lg border-2 bg-base-200 '>
        
          <th >Name</th>
          <th>idea</th>
          <th>State</th>
         
        </tr>
      </thead>
      <tbody>
 {data.map(e=>(

    <>
     
         
         {e.Ideas.map(items=>(
items.state=='Accept'&&
<tr key={e.id} className='border-8 text bg-white'> 
          <td >
            <div className="flex items-center gap-3">
            {e.avatar!==undefined
    &&e.avatar.includes('avatar ')?
    <div className="avatar placeholder">
      
  <div className="bg-neutral text-neutral-content w-20 rounded-full">
    <span className="text-3xl">{e.name[0]}</span>
  </div>
       {/* <img className='rounded-full w-20' src={user.avatar}/> */}
</div>:
       <img className='rounded-full w-20 h-20' src={e.avatar}/>
}
              <div>
                <div className="font-semibold">{e.user}</div>
                {/* <div className="text-sm opacity-50">United States</div> */}
              </div>
            </div>
        
                 <br />
            {/* <span className="badge badge-ghost badge-sm">Desktop Support Technician</span> */}
          </td>
       <td>  
         {/* <ul className='flex  flex-col gap-2'> */}
            {/* e.Ideas[0]!==undefined&& */}
           
            {/* <li className="badge badge-ghost badge-sm"> */}
          {items.idea}
          {/* </li> */}

            {/* </ul>    */}
             </td>
        <td className='text-green-600'>{items.state}</td>

       


        
      
      
       </tr>  
         ))}
         </>

))} 
      </tbody>
    
    </table>
   </section></>  )
}
