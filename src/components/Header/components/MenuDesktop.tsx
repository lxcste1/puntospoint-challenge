import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import { Box, Button, ListItem } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

export default function MenuDesktop() {

    const [open, setOpen] = useState(true);

    const handleClick = () => {
      setOpen(!open);
    };

  return (
    <Grid container spacing={2} paddingTop={"0.75rem"} paddingBottom={"0.75rem"}>
        <Grid item md={4} />
        <Grid item md={4} justifyContent={"center"}>
            <Box sx={{display:"flex", justifyContent: "center"}}>
                <Button variant='contained'>
                    Dashboard
                </Button>
                <Button>
                    Clientes
                </Button>
                <Button>
                    Reglas de acumulación
                </Button>
            </Box>
        </Grid>
        <Grid item md={4} justifyContent={"center"} sx={{display:"flex"}}>
            <List sx={{width: "fit-content", ":hover":{backgroundColor:"none"}, padding:"0", position:"relative"}}>
                <ListItemButton onClick={handleClick} sx={{":hover":{backgroundColor:"unset"}, padding:"0"}}>
                    <ListItemText primary="Pamela Rojas Gonzalez" sx={{paddingRight:"15px"}} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={!open} timeout="auto" unmountOnExit sx={{position:"absolute", backgroundColor:"#FAFAFE", width:"100%", top:"49px"}}>
                  <List component="div" disablePadding>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{minWidth:"min-content", paddingRight:"10px"}}>
                        <ManageAccountsIcon />
                      </ListItemIcon>
                      <ListItemText primary="Mi cuenta" />
                    </ListItemButton>
                  </ListItem>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{minWidth:"min-content", paddingRight:"10px"}}>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary="Cerrar sesión" />
                    </ListItemButton>                  
                  </ListItem>
                  </List>
                </Collapse>
            </List>
        </Grid>
        
    </Grid>
  )
}
