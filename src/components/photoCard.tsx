import React from "react";
import { PhotoType } from "../data/PhotoData";

import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Button,
  CardActions,
} from "@mui/material";


export const PhotoCard = ({ photo }: PhotoType, { index }: any) => {
  return (
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
  );
};
