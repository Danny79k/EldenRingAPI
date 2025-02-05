import React, { createContext } from 'react'
import { useFetch } from '../components/UseFetch'

export const bossContext = createContext()

export const BossProvider = ({ children }) => {
    const { data, loading, error } = useFetch('https://eldenring.fanapis.com/api/bosses')
    return (
        <bossContext.Provider value={{data, loading, error}}>
            {children}
        </bossContext.Provider>
    )
}
