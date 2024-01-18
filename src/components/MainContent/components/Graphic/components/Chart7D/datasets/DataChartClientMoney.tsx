import React from 'react';

export default function DataChartClientMoney(data) {
    
    const dataChartClientMoney = {
        labels: data?.map(x => x.date),
        datasets: [
            {
                label: 'Dinero total',
                data: data?.map(x => x.amount),
                borderWidth: 2,
                borderColor: "#EB3535",
                backgroundColor: "#EB3535",
                pointRadius: 0,
                type: 'line' as const,
                yAxisID: 'y1',
                order: 0
            },
            {
                label: 'Ventas',
                data: data?.map(x => x.sales),
                borderWidth: 2,
                borderColor: "#7A35EB",
                backgroundColor: "#7A35EB",
                pointRadius: 0,
                type: 'line' as const,
                order: 1
            },            
            {
                label: 'Clientes nuevos',
                data: data?.map(x => x.newClients),
                borderWidth: 1,
                backgroundColor:"#2DCF5A",
                type: 'bar' as const,
                order: 2
            },            
            {
                label: 'Compraron',
                data: data?.map(x => x.sales),
                borderWidth: 1,
                backgroundColor: "#358DEB",
                type: 'bar' as const,
                yAxisID: 'y',
                order: 3
            },
            {
                label: 'Clientes totales',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#EB3535",
                type: 'bar' as const,
            },
            {
                label: 'No compraron',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#2DCF5A",
                type: 'bar' as const, 
            },               
        ]      
    }

    return dataChartClientMoney
}