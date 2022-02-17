import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function layout({children}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}