import React from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  Container,
  CssBaseline,
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
        </Container>
      </main>
    </>
  );
};
export default App;
