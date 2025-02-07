import React, { createContext, useEffect, useState } from 'react'
import { useFetch } from '../components/UseFetch'

export const bossContext = createContext()

export const BossProvider = ({ children }) => {
    const [page, setPage] = useState(0)
    const handlePage = (page) => {
        setPage(page)
    }
    console.log(page)
    const { data, loading, error } = useFetch(`https://eldenring.fanapis.com/api/bosses?page=${page}`)
    


    return (
        <bossContext.Provider value={{data, loading, error, page, handlePage}}>
            {children}
        </bossContext.Provider>
    )
}
