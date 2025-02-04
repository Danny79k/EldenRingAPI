import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='bg-slate-950 py-5'>
        <Link className='px-3 py-5 hover:border-b'>Enlace 1</Link>
        <Link className='px-3 py-5 hover:border-b'>Enlace 2</Link>
        <Link className='px-3 py-5 hover:border-b'>Enlace 3</Link>
    </div>
  )
}
