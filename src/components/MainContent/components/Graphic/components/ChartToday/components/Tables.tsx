import React from 'react';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Tables(data) {
    const newClientsAmount = {};
    const clientSalesAmount = {};
    let amountClients = 79931;
    let totalClients = 0;

    const getRange = (hour) => {
        const hours = parseInt(hour.split(":")[0], 10);
        const initialRange = Math.floor(hours / 4) * 4;
        const finalRange = initialRange + 4;
        return `${initialRange.toString().padStart(2, '0')}:00 - ${finalRange.toString().padStart(2, '0')}:00`;
    };

    data?.data?.forEach(item => {
        const range = getRange(item.date);

        if (!newClientsAmount[range]) {
            newClientsAmount[range] = 0;
        }
        newClientsAmount[range] += item.newClients;

        if (!clientSalesAmount[range]) {
            clientSalesAmount[range] = 0;
        }
        clientSalesAmount[range] += item.sales;

        amountClients += item.sales + item.newClients;
        totalClients = amountClients;
    })

    return (
        <Grid container sx={{marginTop:["unset","2rem"]}} spacing={[1,2]}>
            <Grid item md={3} xs={3}>
                <TableContainer component={Paper} sx={{backgroundColor:"#E6E1E6", borderRadius:"10px"}}>
                    <Typography variant="subtitle2" gutterBottom sx={{textAlign:"center", marginTop:"1rem", marginBottom:"0"}}>HOY</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                    Horas
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(newClientsAmount).map(range => (
                                <TableRow key={range}>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {range}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item md={9} xs={9}>
                <TableContainer component={Paper} sx={{backgroundColor:"#E6E1E6", borderRadius:"10px"}}>
                <Typography variant="subtitle2" gutterBottom sx={{textAlign:"center", marginY:"1rem", marginBottom:"0"}}>Clientes</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>Column 1</TableCell>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>Column 2</TableCell>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>Column 3</TableCell>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>Total</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Object.keys(newClientsAmount).map(range => (
                                <TableRow key={range}>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {newClientsAmount[range]}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {clientSalesAmount[range]}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {newClientsAmount[range] + clientSalesAmount[range] + amountClients}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {totalClients}
                                    </TableCell>
                                </TableRow>                             
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>    
    )
}
