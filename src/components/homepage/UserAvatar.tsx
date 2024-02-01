import { Avatar, Box, Typography } from "@mui/material";

export const UserAvatar = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={1}
      padding="0 0.4rem"
    >
      <Avatar />
      <Typography variant="caption">User</Typography>
    </Box>
  );
};
