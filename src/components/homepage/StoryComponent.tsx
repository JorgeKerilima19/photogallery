import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { photosCollection } from "../../data/photoCollection";

const userDefault = { id: 10, username: "user" };

export const StoryComponent = ({ user = userDefault }: any) => {
  const [userPhoto, setUserPhoto] = useState<string>();

  useEffect(() => {
    setUserPhoto(photosCollection[user.id - 1]);
  }, []);

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
        src={userPhoto}
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
