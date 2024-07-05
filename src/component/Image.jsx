import React from 'react'

export default function Image({dataAll}) {
  return (
   <> {dataAll.avatar!==undefined
    &&dataAll.avatar.includes('avatar ')?
    <div className="avatar placeholder">
      
  <div className="bg-slate-500 text-neutral-content w-24 rounded-full">
    <span className="text-3xl">{dataAll.name[0]}</span>
  </div>
</div>:
       <img className='rounded-full self-center max-sm:w-10 max-sm:m-2  max-sm:h-10 w-24 h-24' src={dataAll.avatar}/>
}</>
  )
}
