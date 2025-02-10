import React from 'react'
import '../css/Boss.css'

export const BossShowcase = ({ boss }) => {
  console.log(boss)
  return (
    <>
      <div style={
        {
          position: 'relative',
          backgroundImage: `url(${boss.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '300px',
        }
      } className='bg-stone-900 p-5 rounded-3xl container'>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.3)', // Negro translúcido
        }} className='rounded-3xl container-shadow'></div>
        <div className='z-10'>
          <h4 className='text-2xl'>{boss.name}</h4>
          <p>Region: {boss.region}</p>
        </div>
      </div>
    </>
  )
}
