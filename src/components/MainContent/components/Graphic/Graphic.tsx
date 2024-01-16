import React, { useState } from 'react'

import { Container, Grid, Button, ToggleButtonGroup, ToggleButton, Collapse } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EventIcon from '@mui/icons-material/Event';

export default function Graphic() {
    const [btn, setBtn] = useState('HOY');
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
        {name:"HOY"},
        {name:"7D"},
        {name:"Este mes"},
        {name:"6M"},
        {name:"YTD / YTG"},
        {name:"MÁX"},
    ]  

    return (
        <Container sx={{paddingX:["", "0"]}}>
        <Grid container sx={{display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:"1rem"}}>
            <Grid item md={10}>
                <ToggleButtonGroup
                    color="primary"
                    value={btn}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform">
                        {btns.map((e) => <ToggleButton key={e.name} value={e.name} sx={{marginX:"1rem", padding:"6px 12px", fontSize:"14px", border:"none", borderRadius:"8px!important", color:"#1D192B", "&.Mui-selected":{color:"#1D192B", backgroundColor:"#E7DFF8"}}}>{e.name}</ToggleButton>)}
                        <Button onClick={handleClick} sx={{position:"relative"}}>
                            <EventIcon fontSize='small' />
                            Personalizado
                            <Collapse in={!open} sx={{position:"absolute", top:["", "40px"], left:["", "-15px"], backgroundColor:"#FAFAFE"}}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DateCalendar />
                                </LocalizationProvider>
                            </Collapse>
                        </Button>
                </ToggleButtonGroup>
            </Grid>
            <Grid item md={2} sx={{display:"flex", justifyContent:["", "end"]}}>
                <Button variant="text" startIcon={<RemoveRedEyeIcon />}>
                    Ver detalle
                </Button>
            </Grid>
        </Grid>
        </Container>
    )
}
