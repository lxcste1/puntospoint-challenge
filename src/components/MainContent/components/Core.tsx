import React, { useState, useEffect } from 'react'
import { useQuery, useQueryClient } from 'react-query'

import FetchClients from '../../../api/fetchClients';

import { Collapse, Container, Grid, List, ListItem, ListItemButton } from '@mui/material'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import BarChartIcon from '@mui/icons-material/BarChart';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarHalfIcon from '@mui/icons-material/StarHalf';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TagManager from 'react-gtm-module';

export default function Core() {
    const [open, setOpen] = useState(true);
    const [view, setView] = useState('graphic');

    const { data } = useQuery(
        ['clients'],
        async () => await FetchClients()
    )

    const queryClient = useQueryClient();

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newView: string,
    ) => {
        setView(newView);
        if (newView) queryClient.setQueryData('changeView', newView);
        TagManager.dataLayer({
            dataLayer:{
                event: "customClickEvent",
                category: "Toggle button - Graphic and Pulse views",
                label: view            
            }
        })
    };

    const handleClick = () => {
      setOpen(!open);
    };

    return (
        <Container sx={{padding:"0"}}>
            <Grid container sx={{justifyContent:"space-between", alignItems:"center"}}>
                <Grid item md={9}>
                    <ToggleButtonGroup
                        color="primary"
                        value={queryClient.getQueryData('changeView') || 'graphic'}
                        exclusive
                        onChange={handleChange}
                        aria-label="View"
                        sx={{maxWidth:"200px", borderRadius:"100px", padding:"3px", border:"1px solid #644BBA", width:"100%", justifyContent:"space-between"}}
                    >
                        <ToggleButton 
                            value="graphic"
                            sx={{color:"#644BBA", textTransform:"capitalize", borderRadius:"100px", border:"unset", paddingY:"5px", "&.Mui-selected":{color:"#FFFFFF", backgroundColor:"#644BBA", borderRadius:"100px", ":hover":{backgroundColor:"#7059bf"}}, ":hover":{backgroundColor:"unset"}}}
                        >
                            <BarChartIcon />
                            Gráfico
                        </ToggleButton>
                        <ToggleButton
                            value="pulse"
                            sx={{color:"#644BBA", textTransform:"capitalize", borderRadius:"100px", border:"unset", paddingY:"5px", "&.Mui-selected":{color:"#FFFFFF", backgroundColor:"#644BBA", borderRadius:"100px", ":hover":{backgroundColor:"#7059bf"}}, ":hover":{backgroundColor:"unset"}}}
                        >
                            <StarHalfIcon/>
                            Pulso
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>
                <Grid 
                    item
                    md={3}
                    sx={{display:"flex", justifyContent:"end", alignItems:"center"}}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={handleClick} sx={{justifyContent:"end", borderRadius:"100px", padding:"12px", ":hover":{backgroundColor:"unset"}}}>
                                {open ? <ExpandLess /> : <ExpandMore />}
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Grid>
            </Grid>
            <Grid container>
                <Collapse in={open} timeout="auto" unmountOnExit sx={{width:"100%"}}>
                    {data?.map((e) =>
                    <Paper key={e.id} elevation={2} sx={{width:"100%", marginY:"1rem", borderRadius:"20px"}}>
                        <TableContainer>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="center" colSpan={3} sx={{fontSize:"16px", fontWeight:"700", borderBottom:"unset", padding:"6px"}}>
                                            {e.date}
                                        </TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Clientes</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>{e.count.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Ventas totales</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>{e.sales.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Monto total</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>${e.amount / 1000000}M</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell component="th" scope="row" sx={{fontSize:"16px", fontWeight:"500", borderBottom:"unset", paddingY:"3px"}}>Cashback</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Acumulado</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>${e.cashback.accumulated.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Facturado 01/10</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>${e.cashback.invoiced.Q1.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingY:"3px"}}>Facturado 10/10</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingY:"3px"}}>${e.cashback.invoiced.Q2.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>
                                    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row" sx={{borderBottom:"unset", paddingTop:"3px", paddingBottom:"20px"}}>Facturado 20/10</TableCell>
                                        <TableCell align="right" sx={{borderBottom:"unset", paddingTop:"3px", paddingBottom:"20px"}}>${e.cashback.invoiced.Q3.toLocaleString("es-ES")}</TableCell>
                                    </TableRow>                                                                                                  
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Paper>
                    )}
                </Collapse>
            </Grid>
        </Container>
    )
}
