import React from 'react';

export default function DataChartTransactionsMoney(data) {
    
    const dataChartTransactionsMoney = {
        labels: data?.map(x => x.date),
        datasets: [
            {
                label: 'Dinero total',
                data: data?.map(x => x.amount),
                borderWidth: 2,
                borderColor: "#EB3535",
                backgroundColor: "#EB3535",
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
                type: 'line' as const,
                order: 1
            },            
            {
                label: 'Transacciones',
                data: data?.map(x => x.transactions),
                borderWidth: 1,
                backgroundColor:"#358DEB",
                barPercentage: 0.3,
                type: 'bar' as const,
                order: 2
            },            
            {
                label: 'Devoluciones',
                data: undefined,
                borderWidth: 1,
                backgroundColor: "#48454E",
                type: 'line' as const,
                order: 3        
            }           
        ]      
    }

    return dataChartTransactionsMoney
}