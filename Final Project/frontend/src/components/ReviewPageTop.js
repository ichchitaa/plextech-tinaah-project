import "../styles/ReviewPageTop.css";
import crossroads from "../images/crossroads.jpeg";
import foothill from "../images/foothill-dining-3.avif";
import clarkKerrCampus from "../images/Clark-Kerr-Dining-Hall-750px-700x500.jpeg";
import cafe3 from "../images/1-4-700x444.jpeg";
import caleats from "../images/caleats.png";
import { Rating } from "@mui/material/";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
import salad from "../images/organic_salad.jpg";

function ReviewPageTop(props) {
  const [tasteRatingAvg, setTasteRatingAvg] = React.useState(0);
  const [visualRatingAvg, setVisualRatingAvg] = React.useState(0);
  const [nutritionRatingAvg, setNutritionRatingAvg] = React.useState(0);
  const [overallRatingAvg, setOverallRatingAvg] = React.useState(0);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  React.useEffect(() => {
    fetch("http://localhost:5001/ratings/" + props.cafe_type)
      .then((res) => res.json())
      .then((data) => {
        setTasteRatingAvg(data["taste_rating_avg"]);
        setVisualRatingAvg(data["visual_rating_avg"]);
        setNutritionRatingAvg(data["nutrition_rating_avg"]);
        setOverallRatingAvg(data["overall_rating_avg"]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div class="page">
      <div class="header">
        <div class="header-parent">
          <div class="leftheader">
            <Link to="/">
              <img class="logo" src={caleats} alt="CalEats Logo"></img>
            </Link>
          </div>
          <div class="centerheader">
            <h1>{loadName(props.cafe_type)}</h1>
            <a href="https://caldining.berkeley.edu/menus/">
              Click here to view the menu!
            </a>
          </div>
          <div class="rightheader">
            <Link to="/">
              <img class="logo" src={caleats} alt="CalEats Logo"></img>
            </Link>{" "}
          </div>
        </div>
      </div>

      <div class="center">
        <div class="image">
          <img
            class="picture"
            src={loadImage(props.cafe_type)}
            alt={loadName(props.cafe_type) + " Image"}
          ></img>
        </div>

        <div class="ratings">
          <Card sx={{ minWidth: 275, maxWidth: 500, backgroundColor: "gold" }}>
            <CardContent>
              <h2 component="Overall">OVERALL RATING</h2>
              <Rating
                name="read-only"
                value={overallRatingAvg}
                precision={0.1}
                readOnly
              />
              <h2 component="Nutrition">NUTRITION RATING</h2>
              <Rating
                name="read-only"
                value={nutritionRatingAvg}
                precision={0.1}
                readOnly
              />
              <h2 component="Taste">TASTE RATING</h2>
              <Rating
                name="read-only"
                value={tasteRatingAvg}
                precision={0.1}
                readOnly
              />
              <h2 component="Taste">VISUAL RATING</h2>
              <Rating
                name="read-only"
                value={visualRatingAvg}
                precision={0.1}
                readOnly
              />
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

function loadName(cafe_type) {
  if (cafe_type === "crossroads") {
    return "CROSSROADS";
  } else if (cafe_type === "foothill") {
    return "FOOTHILL DINING HALL";
  } else if (cafe_type === "clark_kerr_campus") {
    return "CLARK KERR CAMPUS";
  } else if (cafe_type === "cafe_3") {
    return "CAFE 3";
  }
}

function loadImage(cafe_type) {
  if (cafe_type === "crossroads") {
    return crossroads;
  } else if (cafe_type === "foothill") {
    return foothill;
  } else if (cafe_type === "clark_kerr_campus") {
    return clarkKerrCampus;
  } else if (cafe_type === "cafe_3") {
    return cafe3;
  }
}

export default ReviewPageTop;
