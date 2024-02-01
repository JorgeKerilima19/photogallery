import { Avatar, Box, Typography } from "@mui/material";

import img from "/assets/photo1.jpg";

export const UserAvatar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      padding="0 0.4rem"
    >
      <Avatar
        src={img}
        sx={{
          // height: "3.5rem",
          width: "3.5rem",
          border: "2px solid #7ed957",
        }}
      />
      <Typography variant="caption">User</Typography>
    </Box>
  );
};
