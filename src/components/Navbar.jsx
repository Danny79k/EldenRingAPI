import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-950 py-5'>
        <NavLink className='px-3 py-5 hover:border-b' to='/'>Home</NavLink>
        <NavLink className='px-3 py-5 hover:border-b' to='/bosses'>Bosses</NavLink>
        <NavLink className='px-3 py-5 hover:border-b' to='/classes'>classes</NavLink>
    </div>
  )
}
