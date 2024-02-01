import { Box } from "@mui/material";
import { UserAvatar } from "../homepage/UserAvatar";
import { ContainerCenter } from "../../styles/styles";
import { Post } from "../homepage/Post";

export const HomePage = () => {
  return (
    <ContainerCenter disableGutters>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        gap="0.4rem"
      >
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
        <UserAvatar />
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="0.4rem"
      >
        <Post />
        <Post />
        <Post />
      </Box>
    </ContainerCenter>
  );
};
