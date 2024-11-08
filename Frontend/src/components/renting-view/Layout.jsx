import React from 'react'
import { Outlet } from 'react-router-dom'
import RentHeader from './Header'

const RentLayout = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden">
        
        <RentHeader/>

        <main className="flex flex-col w-full">
            <Outlet/>
        </main>     
    </div>
  )
}

export default RentLayout