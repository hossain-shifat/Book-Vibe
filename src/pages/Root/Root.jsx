import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'

const Root = () => {
  return (
    <div className="lg:max-w-6xl mx-auto">
        <Navbar/>
        <Outlet>

        </Outlet>
        <Footer/>
    </div>
  )
}

export default Root
