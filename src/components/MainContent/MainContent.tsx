import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';

import { Grid } from '@mui/material'

import Content from './components/Content';
import Core from './components/Core'

const queryClient = new QueryClient();

export default function MainContent() {
  
  return (
    <QueryClientProvider client={queryClient}>
      <Grid container spacing={2} sx={{display:"flex", flexDirection:["column-reverse", "unset"], justifyContent:["unset", "center"], paddingY:["1rem", "2rem"], paddingX:["0.5rem", "2rem"]}}>
          <Grid item md={8} xs={12}>
              <Content />
          </Grid>
          <Grid item md={3} xs={12} sx={{paddingLeft:["","0!important"], maxWidth:["100%", "400px"]}}>
              <Core />
          </Grid>
      </Grid>
    </QueryClientProvider>
  )
}
