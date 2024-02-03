import { Avatar, Typography, Box } from "@mui/material";

import img1 from "/assets/user1.jpg";

export const Suggestion = () => {
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
        src={img1}
        sx={{ height: "2.75rem", width: "2.75rem" }}
        alt="Image"
      />
      <Box>
        <Typography variant="body1">User1</Typography>
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
