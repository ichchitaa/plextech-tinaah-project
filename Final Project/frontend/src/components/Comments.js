import React from "react";
import { Typography } from "@mui/material";
import { Divider, Avatar, Grid, Paper } from "@mui/material";

class Comments extends React.Component {
  render() {
    return (
      <>
        <div style={{ padding: 14 }} className="App">
          <Typography var="h1">Hello Amal</Typography>
          <Paper style={{ padding: "40px 20px" }}>
            <Grid container wrap="nowrap" spacing={2}>
              {/* <Grid item>
                            <Avatar alt="Remy Sharp" src={imgLink} />
                        </Grid> */}
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Amal</h4>
                <p style={{ textAlign: "left" }}>Random comment 1</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
            <Grid container wrap="nowrap" spacing={2}>
              {/* <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid> */}
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Amal</h4>
                <p style={{ textAlign: "left" }}>Random comment 2</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
            <Grid container wrap="nowrap" spacing={2}>
              {/* <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid> */}
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Amal</h4>
                <p style={{ textAlign: "left" }}>Random comment 3</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
          <Paper style={{ padding: "40px 20px", marginTop: 10 }}>
            <Grid container wrap="nowrap" spacing={2}>
              {/* <Grid item>
            <Avatar alt="Remy Sharp" src={imgLink} />
          </Grid> */}
              <Grid justifyContent="left" item xs zeroMinWidth>
                <h4 style={{ margin: 0, textAlign: "left" }}>Amal</h4>
                <p style={{ textAlign: "left" }}>Random comment 4</p>
                <p style={{ textAlign: "left", color: "gray" }}>
                  posted 1 minute ago
                </p>
              </Grid>
            </Grid>
          </Paper>
        </div>
      </>
    );
  }
}

export default Comments;
