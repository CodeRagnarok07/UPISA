import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
export default function index({children, content}) {


  return (
    <>
    <Navbar content={content}/>
        {children}
    <Footer/>
    </>
  )
}
