import React from 'react'
import HomeAdmin from './HomeAdmin'
import HomeUser from './HomeUser'
import Nav from './component/Nav'

export default function Home() {
    let email=localStorage.getItem('email')
  return (
    <>
    <Nav/>
    {/* {console.log(!localStorage.getItem('email').includes('domain'))} */}
    {email.includes('admin')?<HomeAdmin/>:<HomeUser/>}
  
    
    </>
   
  )
}
