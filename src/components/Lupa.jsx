import React, { useContext, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid'

export const Lupa = ({ filter, sort }) => {
  const [active, setActive] = useState(false)

  const handleChange = (e) => {
    filter(e.target.value)
  }

  const handleSort = (e) => {
    sort(e.target.textContent)
  }

  const handleClick = () => {
    setActive((active) ? false : true)
  }

  console.log(active)
  return (
    <div className='sticky top-13 pt-5 ps-5 z-10 flex'>
      <button onClick={handleClick} className='pe-3'><i className="bi bi-search"></i></button>
      {active === true && <input className={`bg-white rounded-2xl text-black text-center`} onChange={handleChange} name='busqueda-jefe' placeholder='buscar' />}
      <Menu as="div" className="ps-1 relative inline-block text-left">
        <div>
          <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
            Filtrar
            <FunnelIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
          </MenuButton>
        </div>

        <MenuItems
          transition
          className="absolute left-10 right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
        >
          <div className="py-1">
            <MenuItem>
              <a
                onClick={handleSort}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Nombre
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={handleSort}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Runas
              </a>
            </MenuItem>
            <MenuItem>
              <a
                onClick={handleSort}
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Region
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}
