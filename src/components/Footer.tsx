import React from "react";
import { Grid, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <>
      <Typography variant="h6" align="center">
        The journey never ends...
      </Typography>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item padding={1} xs={"auto"} md={4}>
          <Typography variant="body1" align="center">
            Wait for new updates...
          </Typography>
        </Grid>
        <Grid item padding={1} xs={"auto"} md={4}>
          <Typography variant="body1" align="center">
            @No Copyright
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
