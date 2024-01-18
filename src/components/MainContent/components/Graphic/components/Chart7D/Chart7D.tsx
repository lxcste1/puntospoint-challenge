import React, { useState } from 'react';
import { useQuery } from 'react-query';

import FetchClientsWeek from '../../../../../../api/fetchClientsWeek';

import DataChartClient from './datasets/DataChartClient';
import DataChartClientMoney from './datasets/DataChartClientMoney';
import DataChartClientCashback from './datasets/DataChartClientCashback';
import DataChartTransactions from './datasets/DataChartTransactions';
import DataChartTransactionsMoney from './datasets/DataChartTransactionsMoney';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, PointElement, LineElement, Tooltip } from 'chart.js/auto';
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

export default function Chart7D() {
    
    const [btn, setBtn] = useState('Todo');
    const [view, setView] = useState('Clientes')
    const [viewMoney, setViewMoney] = useState('')
    const { data } = useQuery(
        ['clientsPerWeek'],
        async () => await FetchClientsWeek()
    )

    const dataChartClient = DataChartClient(data);
    const dataChartClientMoney = DataChartClientMoney(data);
    const dataChartClientCashback = DataChartClientCashback(data);
    const dataChartTransactionsMoney = DataChartTransactionsMoney(data);
    const dataChartTransactions = DataChartTransactions(data);
    

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
        setBtn(btn);
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
                        {btns.map((e) => 
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
                            </ToggleButton>)}
                    </ToggleButtonGroup>
                </Grid>
                <Grid item sx={{width:"100%", display:"flex",justifyContent:"space-between", marginBottom:"1.5rem"}}>
                    <Grid item md={6}>
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
                    <Grid item md={6} sx={{display:"flex", justifyContent:["", "end"]}}>
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
            <Container sx={{padding:"0"}}>
                <Grid container sx={{justifyContent:"center"}}>
                    <Grid item md={12} xs={11} sx={{maxWidth:"100%", flexBasis:"100%"}}>
                            {view == 'Clientes' && <Chart type='bar' data={viewMoney == 'Dinero' ? dataChartClientMoney : dataChartClient && viewMoney == 'Cashback' ? dataChartClientCashback : dataChartClient} options={options} height={400} />}
                            {view == 'Transacciones' && <Chart type='bar' data={viewMoney == 'Dinero' ? dataChartTransactionsMoney : dataChartTransactions} options={options} height={400} />}
                    </Grid>            
                </Grid>
            </Container>
        </>

    )
}
