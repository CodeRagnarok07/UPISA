import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
export default function index({children}) {
  return (
    <>
    <Navbar/>
        {children}
    <Footer/>
    </>
  )
}
