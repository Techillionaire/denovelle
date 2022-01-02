import * as React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogPreview from "./BlogPreview"
import ShopPreview from "./ShopPreview"

const Home = () => {
    return(
        <Grid container>
            <Grid item xs={12} md={4} sx={{  flex: 0.25}}>
                <Paper sx={{ minHeight: 1000, background: "#f9f9f9", borderRadius: 0, border: 0 }}><ShopPreview /></Paper>
            </Grid>
            

            <Grid item xs={12} sm={6} md={4} sx={{  flex: 0.50}}>
                <Paper sx={{ minHeight: 1000, background: "#f9f9f9", borderRadius: 0, border: 0  }}><BlogPreview /></Paper>
            </Grid>
           

            <Grid item xs={12} md={4} sx={{  flex: 0.25}}>
                <Paper>1</Paper>
            </Grid>
            
        </Grid>
    )
}

export default Home
