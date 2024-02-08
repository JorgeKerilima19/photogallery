import { Box, Hidden, Typography } from "@mui/material";
import { StoryComponent } from "../homepage/StoryComponent";
import { ContainerCenter, ContainerRight } from "../../styles/styles";
import { Post } from "../homepage/Post";
import { Suggestion } from "../homepage/Suggestion";

export const HomePage = () => {
  return (
    <>
      <ContainerCenter
        disableGutters
        sx={{ padding: { xs: "1rem 0", md: "0 0 1rem 0.8rem" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap="0.4rem"
        >
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
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
          <Box
            sx={{
              display: "grid",
              columnGap: 2,
              rowGap: 1,
              gridTemplateColumns: "auto auto",
              alignItems: "center",
              padding: "0.4rem 0",
            }}
          >
            <Typography variant="h6">Suggested for you</Typography>
            <Typography
              variant="subtitle1"
              sx={{ textDecoration: "underline", color: "#0095f6" }}
            >
              See All
            </Typography>
          </Box>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
          <Suggestion></Suggestion>
        </ContainerRight>
      </Hidden>
    </>
  );
};
