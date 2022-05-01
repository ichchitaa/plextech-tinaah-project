import '../styles/review-page-top.css';
import crossroads from '../images/crossroads.jpeg';
import caleats from '../images/caleats.png'
import {Rating} from '@mui/material/'; 
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import salad from '../images/organic_salad.jpg'

function Reviewpagetop() {
  const [value, setValue] = React.useState(4);
  const [value1, setValue1] = React.useState(2);
  const [value2, setValue2] = React.useState(3);
  const [value3, setValue3] = React.useState(4);
  const bull = (
    <Box component="span" sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}>•</Box>
  );
  return (
  <div class="page">

    <div class="header">
        <div class="header-parent">
            <div class="leftheader">
                <img class="logo" src={caleats} alt="CalEats Logo"></img> 
            </div>
            <div class="centerheader">
                <h1>CROSSROADS</h1>
                <a href="https://caldining.berkeley.edu/menus/">Click here to view the menu!</a>
            </div>
            <div class="rightheader">
                <img class="logo" src={caleats} alt="CalEats Logo"></img> 
            </div>
        </div>
    </div>

    <div class="center">

      <div class="image">
        <img class="picture" src={crossroads} alt="Crossroads Image"></img>
      </div>

      <div class="ratings">
      <Card sx={{ minWidth: 275, maxWidth: 500, backgroundColor: 'gold'}}>
        <CardContent>
            <h2 component="Overall">OVERALL RATING</h2> 
                <Rating name="read-only" value={value} readOnly /> 
            <h2 component="Nutrition">NUTRITION RATING</h2> 
                <Rating name="read-only" value={value1} readOnly />
            <h2 component="Taste">TASTE RATING</h2> 
                <Rating name="read-only" value={value2} readOnly />
            <h2 component="Taste">VISUAL RATING</h2> 
                <Rating name="read-only" value={value3} readOnly />
        </CardContent>
        </Card>
      </div> 

      <div class="image1">
        <img class="picture1" src={salad} alt="Salad Image"></img>
      </div>
    
    </div>
  </div>
  );
}

export default Reviewpagetop;