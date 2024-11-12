import React from 'react'
import { Outlet } from 'react-router-dom'
import RentHeader from './Header'
import Footer from './Footer'

const RentLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        
        <RentHeader/>

        <main className="flex flex-col w-full">
            <Outlet/>
        </main>   

       <Footer/>
    </div>
  )
}

export default RentLayout