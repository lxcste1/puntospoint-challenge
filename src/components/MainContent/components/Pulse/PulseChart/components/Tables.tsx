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

    console.log(data)

    return (
        <Grid container sx={{marginTop:["unset","2rem"]}} spacing={[1,2]}>
            <Grid item md={3} xs={3}>
                <TableContainer component={Paper} sx={{backgroundColor:"#E6E1E6", borderRadius:"10px"}}>
                    <Typography variant="subtitle2" gutterBottom sx={{textAlign:"center", marginTop:"1rem", marginBottom:"0"}}>Pulso</Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                    Meses
                                </TableCell>                                
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data?.data?.map((e) => (
                                <TableRow key={e.date}>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        {e.date}
                                    </TableCell>                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
            <Grid item md={9} xs={9}>
                <TableContainer component={Paper} sx={{backgroundColor:"#E6E1E6", borderRadius:"10px"}}>
                    <Typography variant="subtitle2" gutterBottom sx={{textAlign:"center", marginY:"1rem", marginBottom:"0"}}>Cashback</Typography>
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
                            {data?.data?.map((e) => (
                                <TableRow key={e.date}>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        ${e.cashback.invoiced.Q1}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        ${e.cashback.invoiced.Q2}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        ${e.cashback.invoiced.Q3}
                                    </TableCell>
                                    <TableCell sx={{border:"unset", textAlign:"center", padding:["5px","16px"], fontSize:["11px","14px"], ":hover":{backgroundColor:"#D6D1D6"}}}>
                                        ${e.cashback.accumulated}
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
