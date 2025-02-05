import React from 'react'
import '../css/Boss.css'

export const BossShowcase = ({boss}) => {
    console.log(boss)
  return (
    <div className='bg-stone-900 p-5 rounded-3xl container'>
        <h4 className='text-2xl'>{boss.name}</h4>
        <img src={boss.image} width='320' height='320' alt="" />
        <p>Region: {boss.region}</p>
    </div>
  )
}
