import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './Header/Header'

export default function HomeLayout() {
  return (
    <>
    <Header/>

    <Outlet/>

     <Footer/>
    </>
  )
}
