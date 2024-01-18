import React, { useState } from 'react'
import { useQuery } from 'react-query';

import FetchClientsYTD from '../../../../../../api/fetchClientsYTD';

import DataChartYTD from './datasets/DataChartYTD';
import DataChartYTG from './datasets/DataChartYTG';

import { Container, Grid, ToggleButtonGroup, ToggleButton } from '@mui/material';

import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Legend, PointElement, LineElement, Tooltip } from 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Tooltip,
    Legend
)

export default function ChartYTD() {
    const [view, setView] = useState('')
    const [viewMoney, setViewMoney] = useState('Dinero')

    const { data } = useQuery(
        ['clientsYTD'],
        async () => await FetchClientsYTD()
    )

    const dataChartYTD = DataChartYTD(data);
    const dataChartYTG = DataChartYTG(data);

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
                <Grid container sx={{justifyContent:"space-between"}}>
                    <Grid item md={5} xs={11}>
                           {viewMoney == 'Dinero' && <Chart type='bar' data={dataChartYTD} options={options} height={400} />}
                    </Grid>
                    <Grid item md={5} xs={11}>
                            {viewMoney == 'Dinero' && <Chart type='bar' data={dataChartYTG} options={options} height={400} />}
                    </Grid>           
                </Grid>
            </Container>
        </>
    )
}
