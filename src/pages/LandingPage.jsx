import React from 'react'
import '../css/Landing.css'

export const LandingPage = () => {
  return (
    <div className='wallpaper h-screen'>
      <div className='cover h-screen z-10'></div>
      <div className='absolute top-10'>
        <img src="/logotext.png" alt="" />
      </div>
    </div>
  )
}
