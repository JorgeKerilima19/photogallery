import React from "react";

import {
  Typography,
  AppBar,
  Container,
  CssBaseline,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="primary">
        <Toolbar>
          <MenuIcon
            onClick={() => {
              console.log("object");
            }}
          />
          <Typography variant="h4">Welcome to my photo Gallery</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Container>
          <Typography variant="h5" align="center">
            Presentation:
          </Typography>
          <Typography variant="body1" align="center">
            I just want to know the world better and there is not better way
            than traveling within it
          </Typography>
          <div>
            <Grid container spacing={3} justifyContent="center">
              <Grid item direction="column">
                <Button variant="outlined">Share</Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </main>
    </>
  );
};
export default App;
