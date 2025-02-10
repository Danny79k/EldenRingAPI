import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/Navbar'
import Lottie from 'lottie-react'
import Cat from '../../public/cat.json'

export const LandingLayout = () => {
  return (
    <div className='text-white'>
      <Navbar />

      <Outlet>

      </Outlet>
      <div className='bg-black py-12'>
        <div className='flex justify-around'>
          <div className='grid grid-cols-3'>
            <div className='flex flex-col text-gray-500 p-5 text-center'>
              <h5 className='text-gray-400 text-left text-2xl border-b mb-5'>Contenido legal</h5>
              <a href="/" className='py-1'>Aviso legal</a>
              <a href="/" className='py-1'>Política de privacidad</a>
              <a href="/" className='py-1'>Términos y condiciones</a>
            </div>
            <div className='flex flex-col text-gray-500 p-5 text-center'>
              <h5 className='text-gray-400 text-left text-2xl border-b mb-5'>Redes sociales</h5>
              <a href="/" className="py-1">Facebook</a>
              <a href="/" className="py-1">Twitter</a>
              <a href="/" className="py-1">Instagram</a>
              <a href="/" className="py-1">LinkedIn</a>
              <a href="/" className="py-1">Youtube</a>
            </div>
            <div className='flex flex-col text-gray-500 p-5 text-center'>
              <h5 className='text-gray-400 text-left text-2xl border-b mb-5'>Contáctanos</h5>
              <a href="/" className="py-1">Teléfono</a>
              <a href="/" className="py-1">Correo electrónico</a>
              <a href="/" className="py-1">Dirección</a>
              <a href="/" className="py-1">Mapa de ubicación</a>
            </div>
          </div>
        </div>
        <p className='text-center pt-10 text-gray-400'><strong><a href="https://github.com/Danny79k/EldenRingAPI">Elden Ring fanpage ©</a></strong> 2025 by <strong><a href="https://github.com/Danny79k">Danny Belloli</a></strong> is licensed under CC BY-NC-SA 4.0 </p>
        <div className='flex justify-center items-center pt-5'>
          <a href="https://w3.org/WAI/WCAG2AA-Conformance"><img src="/wcag2AA-blue.png" height='40' width='80' alt="wcag2AA" aria-label='wcag22AA' /></a>
          <div className='z-10'>
            <Lottie animationData={Cat} />
          </div>
        </div>
      </div>
    </div>
  )
}
