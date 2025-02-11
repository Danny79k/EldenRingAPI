import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { bossContext } from '../providers/BossProvider'
import LoadingLottie from '../../public/spinner_lottie.json'
import Lottie from 'lottie-react'

export const Boss = () => {

  const params = useParams()
  const [boss, setBoss] = useState(null)
  const { data, loading, error } = useContext(bossContext)
  useEffect(() => {
    if (data) {
      setBoss(data.data.find((element) => element.id === params.id))
      console.log(data.data.find((element) => element.id === params.id))
    };
  }, [data])
  return (
    <div className='contenedor py-5'>
      {boss &&
        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-lg max-w-lg mx-auto">
          <h2 className="text-3xl font-bold text-white mb-4">{boss.name}</h2>
          <img
            src={boss.image}
            alt={boss.name}
            className="w-full h-64 object-cover rounded-lg mb-4 border border-gray-700"
          />
          <p className="text-gray-300 mb-4">{boss.description}</p>
          <div className="bg-gray-800 p-4 rounded-lg mb-4">
            <h3 className="text-xl font-semibold text-yellow-400">Drops</h3>
            <ul className="list-disc list-inside text-gray-400">
              {boss.drops.map((drop, index) => (
                <li key={index}>{drop}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col bg-gray-800 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-blue-400">Ubicación</h3>
            <p className="text-gray-400">
              <span className="font-semibold text-white">Región:</span> {boss.region}
            </p>
            <p className="text-gray-400">
              <span className="font-semibold text-white">Localización:</span> {boss.location}
            </p>
          </div>
        </div>
      }
      {loading &&
        <div className='flex justify-center'>
          <div className='flex justify-center'>
            <Lottie animationData={LoadingLottie} />
          </div>
        </div>
      }
      {error && <div>Error...</div>}
    </div>
  )
}
