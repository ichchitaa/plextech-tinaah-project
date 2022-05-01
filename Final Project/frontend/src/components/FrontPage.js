import React from "react";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  Button,
  Grid,
  Rating,
} from "@mui/material";
import { LocalDining } from "@mui/icons-material";
import { pink, purple, yellow } from "@mui/material/colors";
import { Link } from "react-router-dom";
import "../styles/FrontPage.css";
// import { Image } from 'mui-image';
// import Image from 'material-ui-image'

import cafe3 from "../images/cafe3.jpeg";
import clarkkerr from "../images/clarkkerr.jpeg";
import foothill from "../images/foothill.jpeg";
import croads from "../images/croads.jpeg";

function FrontPage() {
  const [cafe3Rating, setCafe3Rating] = React.useState(0);
  const [crossroadsRating, setCrossroadsRating] = React.useState(0);
  const [foothillRating, setFoothillRating] = React.useState(0);
  const [clarkKerrCampusRating, setClarkKerrCampusRating] = React.useState(0);
  React.useEffect(() => {
    fetch("http://localhost:5001/ratings/cafe_3")
      .then((res) => res.json())
      .then((data) => {
        setCafe3Rating(data["overall_rating_avg"]);
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:5001/ratings/foothill")
      .then((res) => res.json())
      .then((data) => {
        setFoothillRating(data["overall_rating_avg"]);
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:5001/ratings/crossroads")
      .then((res) => res.json())
      .then((data) => {
        setCrossroadsRating(data["overall_rating_avg"]);
      })
      .catch((err) => console.log(err));
    fetch("http://localhost:5001/ratings/clark_kerr_campus")
      .then((res) => res.json())
      .then((data) => {
        setClarkKerrCampusRating(data["overall_rating_avg"]);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    // <div>
    //   <Typography variant="h1">Hello world!</Typography>
    // </div>
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalDining variant="h3" />
          <Typography variant="h5">Welcome to Cal Eats</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className="title">
          <Typography id="intro" variant="h6">
            Welcome to Cal Eats! This website provides you the unique
            opportunity to actually REVIEW the food that you get in your dining
            halls! The good, the bad and the ugly. Make sure you're honest but
            also constructive. Apart from that, have fun and go bears!!
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
          <Button
            variant="contained"
            color="primary"
            id="button1"
            href="https://caldining.berkeley.edu/menus/"
          >
            <Typography variant="h5">Check menus here!</Typography>
          </Button>
          <Typography> </Typography>
          <Grid container>
            <Grid item xs={6} style={{ background: yellow }} id="grid2">
              <Typography id="name" variant="h3" align="center">
                Cafe 3
              </Typography>
              <Typography variant="h5" align="center">
                Average rating today:{" "}
                <Rating
                  name="read-only"
                  value={cafe3Rating}
                  precision={0.1}
                  readOnly
                />
              </Typography>
              <Link to="/cafe_3">
                <img id="img1" src={cafe3} href="./cafe_3" />
              </Link>
            </Grid>
            <Grid item xs={6} style={{ background: pink }} id="grid1">
              <Typography variant="h3" align="center" id="name">
                Crossroads
              </Typography>
              <Typography variant="h5" align="center">
                Average rating today:
                <Rating
                  name="read-only"
                  value={crossroadsRating}
                  precision={0.1}
                  readOnly
                />
              </Typography>
              <Link to="/crossroads">
                <img id="img2" src={croads} />
              </Link>
            </Grid>
            <Grid item xs={6} style={{ background: purple }} id="grid1">
              <Typography variant="h3" align="center" id="name">
                Foothill
              </Typography>
              <Typography variant="h5" align="center">
                Average rating today:
                <Rating
                  name="read-only"
                  value={foothillRating}
                  precision={0.1}
                  readOnly
                />
              </Typography>
              <Link to="/foothill">
                <img id="img3" src={foothill} />
              </Link>
            </Grid>
            <Grid item xs={6} style={{ background: purple }} id="grid2">
              <Typography variant="h3" align="center" id="name">
                Clark Kerr
              </Typography>
              <Typography variant="h5" align="center">
                Average rating today:
                <Rating
                  name="read-only"
                  value={clarkKerrCampusRating}
                  precision={0.1}
                  readOnly
                />
              </Typography>
              <Link to="/clark_kerr_campus">
                <img id="img4" src={clarkkerr} />
              </Link>
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
          <Link to="/review_form">
            <Button
              id="button"
              align="center"
              variant="contained"
              color="primary"
            >
              <Typography variant="h5" align="center">
                Click here to write a review!
              </Typography>
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}

export default FrontPage;
