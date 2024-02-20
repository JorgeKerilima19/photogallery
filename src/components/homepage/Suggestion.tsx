import { useState, useEffect } from "react";

import { photosCollection } from "../../data/photoCollection";

import { Avatar, Typography, Box } from "@mui/material";

import img1 from "/assets/user1.jpg";

const userDefault = {
  id: 0,
  name: "RandomUser",
};

export const Suggestion = ({ user = userDefault }) => {
  const [userPhoto, setUserPhoto] = useState<string>(img1);

  useEffect(() => {
    setUserPhoto(photosCollection[Math.floor(Math.random() * 10)]);
  }, []);
  return (
    <Box
      sx={{
        display: "grid",
        columnGap: 2,
        rowGap: 1,
        gridTemplateColumns: "3rem auto auto",
        alignItems: "center",
        padding: "0.4rem 0",
      }}
    >
      <Avatar
        src={userPhoto}
        sx={{ height: "2.75rem", width: "2.75rem" }}
        alt="Image"
      />
      <Box>
        <Typography
          variant="body1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            maxWidth: "6rem",
          }}
        >
          {user.name}
        </Typography>
        <Typography variant="caption">Suggested for you</Typography>
      </Box>
      <Typography
        variant="body2"
        sx={{ textDecoration: "underline", color: "#0095f6" }}
      >
        Follow
      </Typography>
    </Box>
  );
};
