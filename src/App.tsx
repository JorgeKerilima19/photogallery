import React from "react";

import AppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const App = () => {
  return (
    <>
      <AppBar position="fixed" color="primary">
        <Container>
          <MenuIcon onClick={()=>{
            console.log("object");
          }}/>
          <Typography variant="h4">Welcome to my photo Gallery</Typography>
        </Container>
        

      </AppBar>
    </>
  );
};
export default App;
