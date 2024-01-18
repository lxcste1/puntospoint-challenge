import React from 'react'

export default function DataChartPulse(data) {

    const dataChartPulse = {
        labels: data?.map(x => x.date),
        datasets: [
            {
                label: 'Cashback acumulado',
                data: data?.map(x => x.cashback.accumulated),
                borderWidth: 2,
                borderColor: "#7A35EB",
                backgroundColor: "#7A35EB",
                pointRadius: 0,
                type: 'line' as const,
                yAxisID: 'y1',
                order: 0
            },   
            {
                label: 'Día 01',
                data: data?.map(x => x.cashback.invoiced.Q1),
                borderWidth: 1,
                backgroundColor:"#2DCF5A",
                barPercentage: 0.5,
                type: 'bar' as const,
                yAxisID: 'y',
                order: 1
            },
            {
                label: 'Día 10',
                data: data?.map(x => x.cashback.invoiced.Q2),
                borderWidth: 1,
                backgroundColor: "#358DEB",
                barPercentage: 0.5,
                type: 'bar' as const,
                order: 2
            },
            {
                label: 'Día 20',
                data: data?.map(x => x.cashback.invoiced.Q3),
                borderWidth: 1,
                backgroundColor: "#EB7635",
                barPercentage: 0.5,
                type: 'bar' as const,
                order: 3
            },            
        ]       
    }

  return dataChartPulse
}
