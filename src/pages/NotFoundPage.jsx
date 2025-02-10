import React from 'react'
import '../css/NotFound.css'
import NotFound from '../../public/NotFoundLottie.json'
import Lottie from 'lottie-react'

export const NotFoundPage = () => {
    return (
        <div className='contenedor h-screen'>
            <div className='z-10 h-screen contendor-oscuro'>
                <div className='flex justify-center h-screen items-center'>
                    <p className='text-5xl'>404, Not Found...</p>
                    <Lottie className='w-32 z-10' animationData={NotFound} />
                </div>
            </div>
        </div>
    )
}
