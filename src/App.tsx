import React from "react";

import { styled } from "@mui/material";

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

const CustomContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "1em",
  margin: "2em",
});

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="primary" sx={{ display: "flex" }}>
        <Toolbar sx={{ maxWidth: "lg", margin: "auto" }} variant="regular">
          <MenuIcon
            sx={{ fontSize: "2em" }}
            onClick={() => {
              console.log("object");
            }}
          />
          <Typography paddingLeft={2} variant="h4">
            Welcome to my photo Gallery
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <CustomContainer>
          <Typography variant="h5" align="center">
            Presentation:
          </Typography>
          <Typography variant="body1" align="center">
            I just want to know the world better and there is not better way
            than traveling within it
          </Typography>
        </CustomContainer>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            maxWidth="lg"
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {data.map((photo: Photo, index) => (
              <Grid key={index} item xs={"auto"} sm={6} md={4}>
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
