import React from 'react'
import HomeAdmin from './HomeAdmin'
import HomeUser from './HomeUser'

export default function Home() {
    let email=localStorage.getItem('email')
  return (
    <>
    {/* {console.log(!localStorage.getItem('email').includes('domain'))} */}
    {email.includes('admin')?<HomeAdmin/>:<HomeUser/>}
    
    
    </>
   
  )
}
