import React from "react";
import { Photo, photoData as data } from "./data/photoData";
import MenuIcon from "@mui/icons-material/Menu";

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
  CardActions,
} from "@mui/material";

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
        </Container>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid container maxWidth="md" spacing={2} justifyContent="center">
            {data.map((photo: Photo, index) => (
              <Grid key={index} item>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    width: "20rem",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={photo.imageUrl}
                    title="Image title"
                    sx={{ display: "flex", height: "15rem", width: "100%" }}
                  />
                  <CardContent>
                    <Typography variant="body2">{photo.description}</Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-evenly" }}>
                    <Button variant="outlined">Share</Button>
                    <Button variant="outlined">View</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;
