export const fetchClients = async () => {
    return await fetch('https://8c76c825-1a3e-4b4a-a3eb-ae439cccb1f8.mock.pstmn.io/clients').then(async res => {
        if(!res.ok) throw new Error('Error en la petición')
        return await res.json();
    })
}