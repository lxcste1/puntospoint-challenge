import React from 'react';

export default function DataChartClient(data) {
    
    const dataChartClient = {
        labels: data?.map(x => x.date),
        datasets: [
            {
                label: 'Nuevos clientes',
                data: data?.map(x => x.newClients),
                borderWidth: 1,
                backgroundColor:"#EB7635",
                type: 'bar' as const,
                order: 0
            },
            {
                label: 'Compraron',
                data: data?.map(x => x.sales),
                borderWidth: 1,
                backgroundColor: "#358DEB",
                type: 'bar' as const,
                order: 1
            },
            {
                label: 'Clientes totales',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#EB3535",
                type: 'bar' as const,
                order: 2
            },
            {
                label: 'No compraron',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#2DCF5A",
                type: 'bar' as const, 
                order: 3
            },               
        ]       
    }

    return dataChartClient
}
