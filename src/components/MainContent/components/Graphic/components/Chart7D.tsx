import React, { useState } from 'react';
import { useQuery } from 'react-query';

import FetchClientsWeek from '../../../../../api/fetchClientsWeek';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, PointElement, LineElement, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { Container, Grid, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
)

export default function Chart7D() {
    const [btn, setBtn] = useState('Todo');
    const [view, setView] = useState('Clientes')
    const [viewMoney, setViewMoney] = useState('')
    const { data } = useQuery(
        ['clientsPerWeek'],
        async () => await FetchClientsWeek()
    )

    console.log(data)

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newBtn: string,
    ) => {
        setBtn(newBtn);
    };

    const handleChangeView = (
        event: React.MouseEvent<HTMLElement>,
        newView: string,
    ) => {
        setView(newView);
    };

        const handleChangeMoney = (
        event: React.MouseEvent<HTMLElement>,
        newViewMoney: string,
    ) => {
        setViewMoney(newViewMoney);
    };

    const btns = [
        {name:"Todo"},
        {name:"Lunes"},
        {name:"Martes"},
        {name:"Miércoles"},
        {name:"Jueves"},
        {name:"Viernes"},
        {name:"Sábado"},
        {name:"Domingo"},
    ]  

    var dataChartView = {
        labels: data?.map(x => x.date),
        datasets: view == 'Clientes' ? ([
            {
                label: 'Clientes totales',
                data: 0,
                borderWidth: 1,
                backgroundColor: "#EB3535",
                type: 'bar' as const,
            },
            {
                label: 'Nuevos clientes',
                data: data?.map(x => x.newClients),
                borderWidth: 1,
                backgroundColor:"#EB7635",
                type: 'bar' as const,
            },
            {
                label: 'Compraron',
                data: data?.map(x => x.sales),
                borderWidth: 1,
                backgroundColor: "#358DEB",
                type: 'bar' as const,
                order: 0
            },
            {
                label: 'No compraron',
                data: 0,
                borderWidth: 1,
                backgroundColor: "#2DCF5A",
                type: 'bar' as const,   
            },               
        ]) : ([
               {
                label: 'Transacciones',
                data: data?.map(x => x.transactions),
                borderWidth: 1,
                backgroundColor:"#358DEB",
                barPercentage: 0.3,
                type: 'bar' as const,
                order: 2,
                yAxisID: 'y',
            },
            {
                label: 'Ventas',
                data: data?.map(x => x.sales),
                borderWidth: 2,
                borderColor: "#7A35EB",
                backgroundColor: "#7A35EB",
                type: 'line' as const,
                order: 0
            },
            {
                label: 'Dinero total',
                data: data?.map(x => x.amount),
                borderWidth: 2,
                borderColor: "#EB3535",
                backgroundColor: "#EB3535",
                type: 'line' as const,
                order: 1,
                yAxisID: 'y1',
            },
            {
                label: 'Devoluciones',
                data: 0,
                borderWidth: 1,
                backgroundColor: "#48454E",
                type: 'line' as const,
                order: 3        
            }        
        ])
    }

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
            <Grid container>
                <Grid item sx={{marginBottom:"1.5rem"}}>
                    <ToggleButtonGroup
                        color="primary"
                        value={btn}
                        exclusive
                        onChange={handleChange}
                        aria-label="View"
                        sx={{flexWrap:["wrap","nowrap"], justifyContent:["center", "unset"]}}>
                        {btns.map((e) => <ToggleButton key={e.name} value={e.name} sx={{marginX:"0.75rem", padding:"6px 12px", fontSize:"14px", border:"none", textTransform:"inherit", borderRadius:"8px!important", color:"#1D192B", "&.Mui-selected":{color:"#1D192B", backgroundColor:"#E7DFF8"}}}>{e.name}</ToggleButton>)}
                    </ToggleButtonGroup>
                </Grid>
                <Grid item sx={{width:"100%", display:"flex",justifyContent:["", "space-between"], marginBottom:"1.5rem"}}>
                    <Grid md={6}>
                    <ToggleButtonGroup
                        color="primary"
                        value={view}
                        exclusive
                        onChange={handleChangeView}
                        aria-label="View"
                        sx={{flexWrap:["wrap","nowrap"], justifyContent:["center", "unset"]}}>
                        {[{name:"Clientes"}, {name:"Transacciones"}].map((e) => (
                        <ToggleButton 
                            key={e.name} 
                            value={e.name} 
                            sx={{
                                marginX:"0.75rem",
                                padding:"6px 12px",
                                fontSize:"14px",
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
                    <Grid md={6} sx={{display:"flex", justifyContent:["", "end"]}}>
                        <ToggleButtonGroup
                            color="primary"
                            value={viewMoney}
                            exclusive
                            onChange={handleChangeMoney}
                            aria-label="View"
                            sx={{flexWrap:["wrap","nowrap"], justifyContent:["center", "unset"]}}>
                            {[{name:"Dinero"}, {name:"Cashback"}].map((e) => (
                                <ToggleButton 
                                    key={e.name} 
                                    value={e.name} 
                                    sx={{
                                        marginX:"0.75rem",
                                        padding:"6px 12px",
                                        fontSize:"14px",
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
            </Grid>
            <Container>
                <Grid container sx={{justifyContent:"center"}}>
                    <Grid item md={12} xs={11}>
                        {view != 'Clientes' || 'Transacciones' ? 
                            (<Chart 
                                type='bar'
                                data={dataChartView}
                                options={options}
                                height={300}
                            />) : ("")  
                        } 
                    </Grid>            
                </Grid>
            </Container>
        </>

    )
}
