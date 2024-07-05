import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function NavTop() {
  const navigate=  useNavigate()
  return (
    <nav className='flex justify-between px-8 mb-8 '> 
    <h2 className='w-32'><img src={logo} alt="" /></h2>
    {/* <div className="tooltip" data-tip="LogOut"> */}

    <button className='text-3xl max-sm:hidden' onClick={()=>{
localStorage.removeItem('email')
localStorage.removeItem('id')
navigate('/')
}}>
  <ion-icon name="log-out-outline"></ion-icon></button>


</nav>
  )
}
