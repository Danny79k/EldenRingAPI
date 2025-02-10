import React, { useEffect, useState } from 'react'
import { useFetch } from '../components/UseFetch'
import Lottie from 'lottie-react'
import LoadingLottie from '../../public/spinner_lottie.json'
import { ClassShowCase } from '../components/ClassShowCase'
import '../css/Class.css'

export const ClassPage = () => {
  const {data, loading, error} = useFetch('https://eldenring.fanapis.com/api/classes');
  const [classes, setClasses] = useState([])
  useEffect(() => {
    if (data) setClasses(data.data)
    },[data])
    console.log(classes)
  if (loading) return <div className='flex justify-center items-center'><Lottie animationData={LoadingLottie}/></div>
  if (error) return <div>Error...</div>
  return (
    <div className=' flex justify-center flex-wrap'>
      {
        classes.map(element => {return(<ClassShowCase classes={element} key={element.id}/>)})
      }
    </div>
  )
}
