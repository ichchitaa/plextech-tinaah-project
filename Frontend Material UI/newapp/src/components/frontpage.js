import logo from './logo.svg'; 
import './App.css';
import React from 'react';
import { Typography, CssBaseline, AppBar, Toolbar, Button, Link, Grid } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import { pink, purple, yellow } from '@mui/material/colors';
// import { Image } from 'mui-image';
// import Link from '@mui/material/Link';
// import Image from 'material-ui-image'

import cafe3 from './cafe3.jpeg'
import clarkkerr from './clarkkerr.jpeg'
import foothill from './foothill.jpeg'
import croads from './croads.jpeg'

function App() {
  return (
    // <div>
    //   <Typography variant="h1">Hello world!</Typography>
    // </div>
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalDiningIcon variant="h3" />
          <Typography variant="h5">
             Welcome to Cal Eats
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="title">
          <Typography id="intro" variant="h6">
            Welcome to Cal Eats! This website provides you the unique opportunity to actually REVIEW
            the food that you get in your dining halls! The good, the bad and the ugly. 
            Make sure you're honest but also constructive. Apart from that, have fun and go bears!!
          </Typography>
          {/* <Typography id="intro" variant="h6">
            1. Be honest
          </Typography>
          <Typography id="intro" variant="h6">
            2. Be constructive
          </Typography>
          <Typography id="intro" variant="h6" gutterBottom>
            3. Have fun and go bears!!
          </Typography> */}
          <Button variant="contained" color="primary"id="button1" href='https://caldining.berkeley.edu/menus/'><Typography variant="h5">Check menus here!</Typography></Button>
          <Typography>    </Typography>
          <Grid container>
          <Grid item xs={6} style={{background:yellow}} id="grid2">
          <Typography id="name" variant="h3" align='center'>Cafe 3</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <img id="img1" src={cafe3} />
        </Grid>
        <Grid item xs={6} style={{background:pink}} id="grid1">
        <Typography variant="h3" align='center' id="name">Crossroads</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <img id="img2" src={croads} />
        </Grid>
        <Grid item xs={6} style={{background:purple}} id="grid1">
        <Typography variant="h3" align='center' id="name">Foothill</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <img id="img3" src={foothill} />
        </Grid>
        <Grid item xs={6} style={{background:purple}} id="grid2">
        <Typography variant="h3" align='center' id="name">Clark Kerr</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <img id="img4" src={clarkkerr} />
        </Grid>
          </Grid>
          {/* <Typography id="name" variant="h3" align='center'>Cafe 3</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <Typography variant="h3" align='center' id="name">Crossroads</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <Typography variant="h3" align='center' id="name">Foothill</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography>
          <Typography variant="h3" align='center' id="name">Clark Kerr</Typography>
          <Typography variant="h5" align='center'>Average rating today:</Typography> */}

          <Button id="button" align='center'variant="contained" color="primary">
            <Typography variant="h5" align='center'>Click here to write a review!</Typography>
            </Button>
        </div>
      </main>
      </>
  );
}

export default App;
