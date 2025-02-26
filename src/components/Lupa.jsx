import React, { useContext, useState } from 'react'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FunnelIcon } from '@heroicons/react/20/solid'
import { useSearchParams } from 'react-router-dom'

export const Lupa = ({ setFilter, setSort }) => {
  const [active, setActive] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
      setFilter(e.target.value);
  };

  const handleSort = (value) => {
      setSort(value);
  };

  return (
      <div className='sticky top-13 pt-5 ps-5 z-10 flex'>
          <button onClick={() => setActive(!active)} className='pe-3'><i className="bi bi-search"></i></button>
          {active && <input className='bg-white me-2 rounded-2xl text-black text-center' onChange={handleChange} placeholder='Buscar' value={searchParams.get('filter') || ''} />}
          <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50">
                  Filtrar
                  <FunnelIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
              </MenuButton>
              <MenuItems className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md">
                  {['Nombre', 'Runas', 'Region'].map(option => (
                      <MenuItem key={option}>
                          {({ active }) => (
                              <button onClick={() => handleSort(option)} className={`block w-full text-left px-4 py-2 text-sm ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}>
                                  {option}
                              </button>
                          )}
                      </MenuItem>
                  ))}
              </MenuItems>
          </Menu>
      </div>
  );
};
