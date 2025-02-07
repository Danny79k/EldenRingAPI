import React from 'react'
import '../css/NotFound.css'

export const NotFoundPage = () => {
    return (
        <div className='contenedor h-screen'>
            <div className='h-screen contendor-oscuro z-10'></div>
            <div className='absolute top-90 left-150'>
                <p className='text-5xl'>404, Not Found...</p>
            </div>
        </div>
    )
}
