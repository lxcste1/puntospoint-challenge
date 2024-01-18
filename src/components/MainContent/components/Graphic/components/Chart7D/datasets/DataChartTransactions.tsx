import React from 'react';

export default function DataChartTransactions(data) {
    
    const dataChartTransactions = {
        labels: data?.map(x => x.date),
        datasets: [          
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
                pointRadius: 0,
                type: 'line' as const,
                order: 3        
            }           
        ]      
    }

    return dataChartTransactions
}