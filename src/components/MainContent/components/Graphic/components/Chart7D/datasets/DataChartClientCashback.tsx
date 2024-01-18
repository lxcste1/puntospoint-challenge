import React from 'react';

export default function DataChartClientCashback(data) {
    
    const dataChartClientCashback = {
        labels: data?.map(x => x.date),
        datasets: [
            {
                label: 'Cashback generado',
                data: data?.map(x => x.cashback.generated),
                borderWidth: 2,
                borderColor: "#EB3535",
                backgroundColor: "#EB3535",
                type: 'line' as const,
                yAxisID: 'y1',
                order: 0
            },
            {
                label: 'Cashback generado',
                data: data?.map(x => x.cashback.accumulated),
                borderWidth: 2,
                borderColor: "#7A35EB",
                backgroundColor: "#7A35EB",
                type: 'line' as const,
                yAxisID: 'y1',
                order: 1
            },
            {
                label: 'Cashback total',
                data: data?.map(x => x.cashback.accumulated + x.cashback.generated),
                borderWidth: 2,
                borderColor: "#EB35AD",
                backgroundColor: "#EB35AD",
                type: 'line' as const,
                yAxisID: 'y1',
                order: 1
            },
            {
                label: 'Clientes nuevos',
                data: data?.map(x => x.newClients),
                borderWidth: 1,
                backgroundColor:"#2DCF5A",
                type: 'bar' as const,
                order: 3
            },
            {
                label: 'Compraron',
                data: data?.map(x => x.sales),
                borderWidth: 1,
                backgroundColor: "#358DEB",
                type: 'bar' as const,
                order: 4
            },
            {
                label: 'Clientes totales',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#EB3535",
                type: 'bar' as const,
                order: 5
            },
            {
                label: 'No compraron',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#2DCF5A",
                type: 'bar' as const, 
                order: 6
            },               
        ]       
    }

    return dataChartClientCashback
}
