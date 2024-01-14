import React, { useState } from 'react'
import { Box, Grid, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Button, IconButton, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

export default function MenuMobile() {

    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer =
    (anchor: "right", open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, ["right"]: open });
    };

    const list = (anchor: "right") => (
        <Box
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        sx={{width:250}}
        >
            <List>
                {['Dashboard', 'Clientes', 'Reglas de acumulación'].map((text, index) => (
                <ListItem key={text} disablePadding>
                    <ListItemButton>
                    <ListItemText primary={text} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon sx={{minWidth:"min-content", paddingRight:"10px"}}>
                        <LogoutIcon />
                      </ListItemIcon>
                    <ListItemText primary={"Cerrar sesión"} />
                    </ListItemButton>
                </ListItem>            
            </List>
        </Box>
  );

  return (
    <>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <Button onClick={toggleDrawer("right", true)}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Button>
            </Grid>
            <Grid item xs={6} display="flex" justifyContent={"end"}>
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{padding:"0"}}
                >
                    <AccountCircleIcon />
                </IconButton>
            </Grid>
        </Grid>
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
          >
            {list("right")}
          </Drawer>
    </>
  )
}
