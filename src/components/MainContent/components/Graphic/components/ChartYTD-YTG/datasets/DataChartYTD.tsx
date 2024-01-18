import React from 'react';

export default function DataChartYTD(data) {
    
    const dataChartYTD = {
        labels: ["YTD"],
        datasets: [
            {
                label: '2022',
                data: data?.map(x => x.year.Q1),
                borderWidth: 1,
                backgroundColor:"#EB3535",
                type: 'bar' as const,
                order: 0
            },
            {
                label: '2023',
                data: data?.map(x => x.year.Q2),
                borderWidth: 1,
                backgroundColor: "#7A35EB",
                type: 'bar' as const,
                order: 1
            },             
        ]    
    }

    return dataChartYTD
}