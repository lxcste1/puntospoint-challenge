// export const fetchClients = async () => {
//     return await fetch('https://8c76c825-1a3e-4b4a-a3eb-ae439cccb1f8.mock.pstmn.io/clients').then(async res => {
//         if(!res.ok) throw new Error('Error en la petición')
//         return await res.json();
//     })
// }

export default function FetchClients() {

    const clients = [
        {
            "id":"3",
            "date":"Noviembre",
            "count":81420,
            "sales":1100,
            "amount":70000000,
            "cashback":{
                "accumulated":200000,
                "invoiced":{
                "Q1":120000,
                "Q2":200000,
                "Q3":0
                }
            }
        },
        {
            "id":"2",
            "date":"Octubre",
            "count":81295,
            "sales":3800,
            "amount":170840000,
            "cashback":{
                "accumulated":700000,
                "invoiced":{
                "Q1":100000,
                "Q2":250000,
                "Q3":100000
                }
            }
        },
        {
            "id":"1",
            "date":"Septiembre",
            "count":80995,
            "sales":4000,
            "amount":179850000,
            "cashback":{
                "accumulated":450000,
                "invoiced":{
                "Q1":85000,
                "Q2":80000,
                "Q3":100000
                }
            }
        }
    ]

    return clients
}