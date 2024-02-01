import { Box, Hidden, Typography } from "@mui/material";
import { UserAvatar } from "../homepage/UserAvatar";
import { ContainerCenter, ContainerRight } from "../../styles/styles";
import { Post } from "../homepage/Post";
import { Sugesstion } from "../homepage/Sugesstion";

export const HomePage = () => {
  return (
    <>
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
      <Hidden lgDown>
        <ContainerRight disableGutters>
          <Typography variant="h6">Sugessted for you</Typography>
          <Sugesstion></Sugesstion>
          <Sugesstion></Sugesstion>
          <Sugesstion></Sugesstion>
        </ContainerRight>
      </Hidden>
    </>
  );
};
