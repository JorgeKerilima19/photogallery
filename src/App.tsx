import React from "react";

import { styled } from "@mui/material/styles";
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
  backgroundColor: "red",
});
const CustomButton = styled(Button)({
  backgroundColor: "#550000",
  "&:hover": {
    backgroundColor: "yellow",
    cursor: "pointer",
  },
}) as typeof Button;

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
          <CustomContainer>
            This Is my Card
            <button>Pick</button>
            <CustomButton variant="outlined">CliCK</CustomButton>
          </CustomContainer>
        </Container>
        <Container>
          <Grid container maxWidth="md">
            <Grid item>
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
                  image="https://picsum.photos/seed/picsum/500/600"
                  title="Image title"
                  sx={{ display: "flex", height: "15rem", width: "100%" }}
                />
                <CardContent>
                  <Typography variant="body2">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Corrupti, incidunt?
                  </Typography>
                </CardContent>
                <CardActions sx={{justifyContent:"space-evenly"}}>
                  <Button variant="outlined">Share</Button>
                  <Button variant="outlined">View</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
};
export default App;
