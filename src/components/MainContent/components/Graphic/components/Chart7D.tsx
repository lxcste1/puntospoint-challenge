import React from 'react';
import { useQuery } from 'react-query';

import { fetchClients } from '../../../../../api/fetchClients';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
)

export default function Chart7D() {
    const { data } = useQuery(
        ['clients'],
        async () => await fetchClients()
    )

    var dataChart = {
        labels: data?.clients?.map(x => x.date),
        datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    }
    var options = {
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true
            }
        },
        legend:{
            labels: {
                fontSize: 26
            }
        }
    }

    return (
        <div>
            <Bar 
                data={dataChart}
                options={options}
                height={400}
            />
        </div>
    )
}
