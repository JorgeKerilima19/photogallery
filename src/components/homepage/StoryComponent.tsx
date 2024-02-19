import { Avatar, Box, Typography } from "@mui/material";

import img from "/assets/photo1.jpg";

const userDefault = { username: "user" };

export const StoryComponent = ({ user = userDefault }: any) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      padding="0 0.4rem"
      width="3.5rem"
      sx={{ cursor: "pointer" }}
    >
      <Avatar
        src={img}
        sx={{
          height: "3.5rem",
          width: "3.5rem",
          border: "2px solid #7ed957",
          position: "static",
        }}
      />
      <Typography
        variant="caption"
        sx={{
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          maxWidth: "100%",
        }}
      >
        {user.username}
      </Typography>
    </Box>
  );
};
