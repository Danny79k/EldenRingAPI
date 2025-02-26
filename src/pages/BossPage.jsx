import React, { useContext, useEffect, useState } from 'react'
import { BossShowcase } from '../components/BossShowcase'
import { Lupa } from '../components/Lupa'
import { bossContext } from '../providers/BossProvider'
import { Link, useSearchParams } from 'react-router-dom'
import Lottie from 'lottie-react'
import LoadingLottie from '../../public/spinner_lottie.json'
import '../css/BossComp.css'


export const BossPage = () => {
    const [bosses, setBosses] = useState([]);
    const { data, loading, error, handlePage, page } = useContext(bossContext);
    const [searchParams, setSearchParams] = useSearchParams();
    
    const filter = searchParams.get('filter') || '';
    const sort = searchParams.get('sort') || '';

    useEffect(() => {
        if (data) setBosses(data.data);
    }, [data]);

    let filtered = bosses.filter((boss) => boss.name.toLowerCase().includes(filter.toLowerCase()));

    switch (sort) {
        case 'Nombre':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
        case 'Region':
            filtered.sort((a, b) => a.region.localeCompare(b.region));
            break;
        case 'Runas':
            filtered.sort((a, b) => b.drops.length - a.drops.length);
            break;
        default:
            break;
    }

    const updateSearchParams = (key, value) => {
        setSearchParams(prev => {
            const params = new URLSearchParams(prev);
            if (value) {
                params.set(key, value);
            } else {
                params.delete(key);
            }
            return params;
        });
    };

    return (
        <div className='bg-neutral-950'>
            <Lupa setFilter={(value) => updateSearchParams('filter', value)} setSort={(value) => updateSearchParams('sort', value)} />
            {loading && <div className='flex justify-center'><Lottie animationData={LoadingLottie} /></div>}
            <div className='grid grid-cols-3 gap-3 justify-items-center items-center py-5'>
                {error && <div>Error...</div>}
                {filtered.map(boss => (
                    <Link key={boss.id} to={`/boss/${boss.id}`}>
                        <BossShowcase boss={boss} />
                    </Link>
                ))}
                {filtered.length < 1 && !loading && <div className='h-screen'><div>No hay resultado para la búsqueda realizada</div></div>}
            </div>
        </div>
    );
};
