import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'

export const LandingLayout = () => {
  return (
    <div className='text-white'>
        <Navbar/>
        
        <Outlet>

        </Outlet>
        <div>
            footer
        </div>
    </div>
  )
}
