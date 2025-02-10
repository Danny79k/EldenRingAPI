import React, { useContext, useEffect, useState } from 'react'
import { BossShowcase } from '../components/BossShowcase'
import { Lupa } from '../components/Lupa'
import { bossContext } from '../providers/BossProvider'
import { Link } from 'react-router-dom'
import Lottie from 'lottie-react'
import LoadingLottie from '../../public/spinner_lottie.json'
export const BossPage = () => {

    const [bosses, setBosses] = useState([])
    const [filter, setFilter] = useState('')
    const [sort, setSort] = useState('')

    const { data, loading, error, handlePage, page } = useContext(bossContext)

    const handleFilter = (filterParam) => {
        setFilter(filterParam)
    }

    const handleSort = (sortType) => {
        setSort(sortType)
    }

    console.log(`el filtro es ${filter}`)
    useEffect(() => {
        if (data) setBosses(data.data)
    }, [data])
    console.log(bosses)

    let filtered = bosses.filter((boss) => boss.name.toLowerCase().includes(filter.toLowerCase()))

    switch (sort) {
        case 'Nombre':
            filtered = filtered.sort((a, b) => a.name.localeCompare(b.name))
            break;
        case 'Region':
            filtered = filtered.sort((a, b) => a.region.localeCompare(b.region))
        case 'Runas':
            filtered = filtered.sort((a, b) => a.drops.length > b.drops.length)
            break;
        default:
            filtered
            break;

    }

    const nextPage = () => {
        handlePage(page + 1)
    }
    const prevPage = () => {
        handlePage(page - 1)
    }
    console.log("la pagina es: " + page)
    return (
        <div className='bg-neutral-950'>
            <Lupa filter={handleFilter} sort={handleSort} />
            {loading &&
                <div className='flex justify-center'>
                    <Lottie animationData={LoadingLottie} /> {/*lottie para DOR*/}
                </div>
            }
            <div className={`grid grid-cols-3 gap-3  justify-items-center items-center py-5`}>
                {error && <div>Error...</div>}
                {
                    filtered.map(boss => {
                        return (<Link key={boss.id} to={`/boss/${boss.id}`}><BossShowcase boss={boss} key={boss.id} /></Link>)
                    }
                    )
                }
                {
                    filtered.length < 1 && !loading &&
                    <div className='h-screen'>
                        <div>
                            No hay resultado para la busqueda realizada
                        </div>
                    </div>
                }
            </div>
            <div className='flex justify-center items-center pb-4'>
                <button type='button' className='bg-sky-950 p-3 px-6 me-2 rounded-lg' disabled={page === 0} onClick={prevPage}>Atrás</button>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(0)}>1</a>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(1)}>2</a>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(2)}>3</a>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(3)}>4</a>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(4)}>5</a>
                <a href='#' className='mx-2 hover:border-b' onClick={() => handlePage(5)}>6</a>
                <button type='button' className='bg-sky-950 p-3 rounded-lg ms-2' disabled={page === 5} onClick={nextPage}>Adelante</button>
            </div>
        </div>
    )
}
