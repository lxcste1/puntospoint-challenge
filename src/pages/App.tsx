import React from 'react'
import { useQuery } from 'react-query'
import Header from '../components/Header/Header'

const fetchClients = async () => {
    return await fetch('https://8c76c825-1a3e-4b4a-a3eb-ae439cccb1f8.mock.pstmn.io/clients').then(async res => {
        if(!res.ok) throw new Error('Error en la petición')
        return await res.json();
    })
    .then(res => {
        res.results
        console.log(res)
    })
}

export default function App() {
    useQuery(
        ['clients'],
        async () => await fetchClients()
    )
  return (
    <>
        <Header />
        APP!
    </>
  )
}
