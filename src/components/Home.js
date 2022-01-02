import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Home = () => {
    return(
        <Grid container>
            <Grid item xs={12} md={4}>
                <Paper>1</Paper>
            </Grid>
            

            <Grid item xs={12} sm={6} md={4}>
                <Paper>1</Paper>
            </Grid>
           

            <Grid item xs={12} md={4}>
                <Paper>1</Paper>
            </Grid>
            
        </Grid>
    )
}

export default Home
