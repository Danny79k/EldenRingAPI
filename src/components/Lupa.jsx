import React, { useContext, useState } from 'react'
import { bossContext } from '../providers/BossProvider'
import { useSearchParams } from 'react-router-dom'

export const Lupa = () => {
    const [active, setActive] = useState(false)
    const [searchParams, setSearchParams] = useSearchParams()
    
    const handleChange = (e) => {
      setSearchParams({filter: e.target.element})
    }

    const handleClick = () => {
        setActive((active) ? false : true)
    }
    console.log(active)
  return (
    <div className='sticky top-5 pt-5 ps-5 z-10 flex'>
        <button onClick={handleClick} className='pe-3'><i class="bi bi-search"></i></button>
        {active === true && <input className='bg-white rounded-2xl text-black text-center' value={searchParams.get('filter') || ''} onChange={handleChange} name='busqueda-jefe' placeholder='buscar'/>}
    </div>
  )
}
