import React from 'react';

import MenuDesktop from './components/MenuDesktop';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import GetSize from '../../../hooks/GetSize';
import MenuMobile from './components/MenuMobile';

export default function Header() {

    const size = GetSize();

  return (
    <Box>
        <AppBar position='static' color={'secondary'}>
            <Toolbar variant="dense">
                {size.width < 767 ? <MenuMobile /> : <MenuDesktop />}
            </Toolbar>
        </AppBar>
    </Box>
  )
}
