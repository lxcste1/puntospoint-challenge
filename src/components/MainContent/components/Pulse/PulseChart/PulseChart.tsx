import React, { useState } from 'react';
import { useQuery } from 'react-query';

import FetchClients from '../../../../../api/fetchClients';

import DataChartPulse from './datasets/DataChartPulse';

import { Container, Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, PointElement, LineElement, Tooltip } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import Tables from './components/Tables';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
)

export default function PulseChart() {
    const [view, setView] = useState('Todos')
    const [btn, setBtn] = useState('PULSO');

    const { data } = useQuery(
        ['clients'],
        async () => await FetchClients()
    )

    const dataChartPulse = DataChartPulse(data);

    const handleChangeView = (
        event: React.MouseEvent<HTMLElement>,
        newView: string,
    ) => {
        setBtn(btn);
        setView(newView);
    };

    var options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            },
            y1: {
                type: 'linear' as const,
                display: true,
                position: 'right' as const,
                grid: {
                    drawOnChartArea: false,
                },
                beginAtZero: true
            },
        },
        plugins: {
            legend: {
                position: "bottom" as const
            }
        },
        legend:{
            labels: {
                fontSize: 26
            }
        }
    } 

    return (
        <>
            <Container sx={{padding:"0"}}>
                <Grid container>
                    <Grid item md={12} sx={{marginY:"0.75rem"}}>
                        <ToggleButtonGroup
                            color="primary"
                            value={view}
                            exclusive
                            onChange={handleChangeView}
                            aria-label="View"
                            sx={{flexWrap:["wrap","nowrap"], justifyContent:["center", "unset"]}}>
                            {[{name:"Todos"}, {name:"Sep"}, {name:"Oct"}, {name:"Nov"}].map((e) => (
                                <ToggleButton 
                                    key={e.name} 
                                    value={e.name} 
                                    sx={{
                                        marginX:["2px", "0.75rem"],
                                        padding:["3px 8px", "6px 12px"],
                                        height:["min-content", "100%"],
                                        fontSize:["12px","14px"],
                                        border:"none",
                                        textTransform:"inherit",
                                        borderRadius:"8px!important",
                                        color:"#1D192B",
                                        "&.Mui-selected":{
                                            color:"#1D192B",
                                            backgroundColor:"#E7DFF8"
                                            }
                                        }}>
                                    {e.name}
                                </ToggleButton>
                            ))}
                        </ToggleButtonGroup>                        
                    </Grid>    
                </Grid>
            </Container>
            <Container sx={{padding:"0", marginTop:"1rem"}}>
                <Grid container sx={{justifyContent:"center"}}>
                    <Grid item md={12} xs={11} sx={{maxWidth:"100%", flexBasis:"100%"}}>
                        {view == 'Todos' && <Chart type='bar' data={dataChartPulse} options={options} height={400} />}
                    </Grid>
                </Grid>
            </Container>
            <Container sx={{padding:"0"}}>
                <Grid container sx={{justifyContent:"center"}}>
                    <Grid item md={12} xs={11} sx={{maxWidth:"100%", flexBasis:"100%"}}>
                        <Tables data={data} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
