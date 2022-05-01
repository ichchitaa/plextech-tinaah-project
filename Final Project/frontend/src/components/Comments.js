import React from "react";
import { Typography } from "@mui/material";
import { Divider, Avatar, Grid, Paper, Rating } from "@mui/material";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.generateReview = this.generateReview.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:5001/reviews/" + this.props.cafe_type)
      .then((res) => res.json())
      .then((res_data) => this.setState({ data: res_data.result }))
      .catch((err) => console.log(err));
    // .then((res_data) => this.setState({ data: res_data }))
  }

  generateReview(name, review, tasteRating, visualRating, nutritionRating) {
    return (
      <Paper
        style={{
          padding: "40px 20px",
          margin: "20px",
          backgroundColor: "lightblue",
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          {/* <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid> */}
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h2 style={{ margin: 0, textAlign: "left" }}>{name}</h2>
            <p style={{ textAlign: "left" }}>Review: {review}</p>
            <h6>TASTE RATING</h6>
            <Rating
              name="read-only"
              value={tasteRating}
              precision={0.1}
              readOnly
            />
            <h6>VISUAL RATING</h6>
            <Rating
              name="read-only"
              value={visualRating}
              precision={0.1}
              readOnly
            />
            <h6>NUTRITION RATING</h6>
            <Rating
              name="read-only"
              value={nutritionRating}
              precision={0.1}
              readOnly
            />
          </Grid>
        </Grid>
      </Paper>
    );
  }

  render() {
    const items = [];
    for (const comment of this.state.data) {
      items.push(
        this.generateReview(
          comment.username,
          comment.review,
          comment.taste_rating,
          comment.visual_rating,
          comment.nutrition_rating
        )
      );
    }

    return (
      <>
        <div>{items}</div>
      </>
    );
  }
}

export default Comments;
