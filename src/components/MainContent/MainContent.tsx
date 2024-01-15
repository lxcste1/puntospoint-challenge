import React from 'react'

import { Grid } from '@mui/material'

import Core from './components/Core'

export default function MainContent() {

  return (
    <Grid container spacing={2} sx={{display:"flex", flexDirection:["column-reverse", "unset"], justifyContent:["unset", "space-evenly"], paddingY:["1rem", "2rem"], paddingX:["0.5rem", "2rem"]}}>
        <Grid item md={8} xs={12}>
            Content
        </Grid>
        <Grid item md={3} xs={12}>
            <Core />
        </Grid>
    </Grid>
  )
}
