import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import BlogPreview from "./BlogPreview";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "10px" }} >
      <Grid container spacing={.5} >
        <Grid item xs={3.5} sx={{ borderRadius: "0"}}>
          <Item>variable width content</Item>
        </Grid>
        <Grid item xs={5} sx={{ borderRadius: "0", minHeight: 'auto'}}>
          <BlogPreview />
        </Grid>
        <Grid item xs={3.5} sx={{ borderRadius: "0"}}>
          <Item>xs</Item>
        </Grid>
      </Grid>
    </Box>
  );
}