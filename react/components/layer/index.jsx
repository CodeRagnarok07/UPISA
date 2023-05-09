import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function index({children, content}) {
  return (
    <>

    <Navbar content={content} />
    {children}
    <Footer/>
    
    </>
  )
}
