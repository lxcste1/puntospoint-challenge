import React, { useState } from 'react'
import { useQuery } from 'react-query';

import FetchClientsToday from '../../../../../../api/fetchClientsToday';

import DataChartToday from './datasets/DataChartToday';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, PointElement, LineElement, Tooltip } from 'chart.js';
import { Chart } from 'react-chartjs-2';

import { Container, Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
)

export default function ChartToday() {
    const [view, setView] = useState('Clientes')
    const [viewMoney, setViewMoney] = useState('')
    const { data } = useQuery(
        ['clientsToday'],
        async () => await FetchClientsToday()
    )

    const dataChartToday = DataChartToday(data);

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

    var options = {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
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
                <Grid item sx={{width:"100%", display:"flex",justifyContent:"space-between", marginBottom:"1.5rem"}}>
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
                                        marginX:["2px", "0.75rem"],
                                        padding:["3px 8px","6px 12px"],
                                        fontSize:["12px","14px"],
                                        height:["min-content", "100%"],
                                        border:"1px solid #79757F",
                                        textTransform:"inherit",
                                        borderRadius:"8px!important",
                                        color:"#1D192B",
                                        "&.MuiToggleButtonGroup-lastButton":{
                                            borderLeft:"1px solid #79757F",
                                            marginLeft:"2px"
                                        },
                                        "&.Mui-selected":{
                                            color:"#1D192B",
                                            backgroundColor:"#E7DFF8",
                                            border:"1px solid transparent",
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
                                        marginX:["2px", "0.75rem"],
                                        padding:["3px 8px","6px 12px"],
                                        fontSize:["12px","14px"],
                                        height:["min-content", "100%"],
                                        border:"1px solid #79757F",
                                        textTransform:"inherit",
                                        borderRadius:"8px!important",
                                        color:"#1D192B",
                                        "&.MuiToggleButtonGroup-lastButton":{
                                            borderLeft:"1px solid #79757F",
                                            marginLeft:"2px"
                                        },
                                        "&.Mui-selected":{
                                            color:"#1D192B",
                                            backgroundColor:"#E7DFF8",
                                            border:"1px solid transparent",
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
                           {view == 'Clientes' && <Chart type='bar' data={dataChartToday} options={options} height={400} />}
                    </Grid>            
                </Grid>
            </Container>
        </>
    )
}
