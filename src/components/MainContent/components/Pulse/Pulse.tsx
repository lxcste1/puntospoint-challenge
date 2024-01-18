import React, { useState } from 'react'

import PulseChart from './PulseChart/PulseChart';

import { Container, Grid, Button, ToggleButtonGroup, ToggleButton, Collapse } from '@mui/material';

import EventIcon from '@mui/icons-material/Event';

export default function Pulse() {
    const [btn, setBtn] = useState('PULSO');
    const [open, setOpen] = useState(true);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newBtn: string,
    ) => {
        setBtn(newBtn);
    };

    const handleClick = () => {
      setOpen(!open);
    };

    const btns = [
        {name:"PULSO"},
        {name:"6M"},
        {name:"YTD / YTG"},
        {name:"1A"},
        {name:"MÁX"},
    ]  

    return (
        <Container>
            <Grid container sx={{display:"flex", justifyContent:["center","space-between"], alignItems:"center", paddingTop:"1rem", marginBottom:"1.5rem"}}>
                <Grid item md={12}>
                    <ToggleButtonGroup
                        color="primary"
                        value={btn}
                        exclusive
                        onChange={handleChange}
                        aria-label="View"
                        sx={{flexWrap:["wrap","nowrap"], justifyContent:["space-around", "unset"]}}>
                            {btns.map((e) => 
                                <ToggleButton 
                                    key={e.name} 
                                    value={e.name} 
                                    sx={{
                                        marginX:["2px", "0.75rem"],
                                        padding:["3px 8px", "6px 12px"],
                                        height:["min-content", "100%"],
                                        fontSize:["12px","13px"],
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
                            <Button onClick={handleClick} sx={{
                                position:"relative",
                                marginX:["2px", "1rem"],
                                padding:["3px 8px", "6px 12px"],
                                height:["min-content", "100%"],
                                fontSize:["12px","13px"],
                                textTransform:"inherit",
                                border:"none",
                                borderRadius:"8px!important",
                                color:"#1D192B",
                                "&.Mui-selected":{
                                    color:"#1D192B",
                                    backgroundColor:"#E7DFF8"
                                    }
                                }}>
                                    <EventIcon fontSize='small' sx={{marginRight:"5px", color:"#644BBA"}} />
                                    Personalizado
                            </Button>
                    </ToggleButtonGroup>                
                </Grid>
            </Grid>
            <Grid container sx={{justifyContent:"center"}}>
                <Grid item md={12} xs={11}>
                    {btn == 'PULSO' && <PulseChart />}
                </Grid>
            </Grid>
        </Container>
    )
}
