import React, { useState } from 'react'

import Chart7D from './components/Chart7D/Chart7D';
import ChartToday from './components/ChartToday/ChartToday';
import ChartYTD from './components/ChartYTD-YTG/ChartYTD';

import { Container, Grid, Button, ToggleButtonGroup, ToggleButton } from '@mui/material';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EventIcon from '@mui/icons-material/Event';

import TagManager from 'react-gtm-module';



export default function Graphic() {
    const [btn, setBtn] = useState('HOY');
    const [open, setOpen] = useState(true);

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newBtn: string,
    ) => {
        setBtn(newBtn);
        TagManager.dataLayer({
            dataLayer:{
                event: "customClickEvent",
                category: "Button - Graphic view | Selected period of days",
                label: btn            
            }
        })
    };

    const handleClick = () => {
      setOpen(!open);
    };

    const btns = [
        {name:"HOY"},
        {name:"7D"},
        {name:"Este mes"},
        {name:"6M"},
        {name:"YTD / YTG"},
        {name:"1A"},
        {name:"MÁX"},
    ]  

    return (
        <Container sx={{paddingX:"0"}}>
        <Grid container sx={{display:"flex", justifyContent:["center","space-between"], alignItems:"center", paddingTop:"1rem", marginBottom:"1.5rem"}}>
            <Grid item md={10} sx={{paddingX:["1rem", ""]}}>
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
                                    "&.MuiToggleButtonGroup-firstButton":{
                                        marginLeft:"0"
                                    },
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
            <Grid item md={2} sx={{display:"flex", justifyContent:["", "end"]}}>
                <Button 
                variant="text" 
                startIcon={<RemoveRedEyeIcon />}
                sx={{
                    marginX:["2px", "0.75rem"],
                    padding:["3px 8px", "6px 12px"],
                    height:["min-content", "100%"],
                    fontSize:["12px","13px"],
                    borderRadius:"8px!important"
                }}
                >
                    Ver detalle
                </Button>
            </Grid>
        </Grid>
        <Grid container sx={{justifyContent:"center"}}>
            <Grid item md={12} xs={11}>
                {btn == 'HOY' && (<ChartToday />)}
                {btn == '7D' && (<Chart7D />)}
                {btn == 'YTD / YTG' && <ChartYTD />}
            </Grid>
        </Grid>
        </Container>
    )
}
