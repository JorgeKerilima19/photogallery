import { Box, Container, Hidden, IconButton, Typography } from "@mui/material";
import { StoryComponent } from "../homepage/StoryComponent";
import { ContainerCenter, ContainerRight } from "../../styles/styles";
import { Post } from "../homepage/Post";
import { Suggestion } from "../homepage/Suggestion";
import React, { useContext, useRef } from "react";
import AppContext from "../../context/AppContext";

import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";

export const HomePage = () => {
  const { users } = useContext(AppContext);
  const containerReft = useRef<HTMLDivElement>(null);

  //Stories

  const ScrollRightButton = () => {
    if (containerReft.current) {
      containerReft.current.scrollBy({
        top: 0,
        left: 100,
        behavior: "smooth",
      });
    }
  };

  const ScrollLeftButton = () => {
    if (containerReft.current) {
      containerReft.current.scrollBy({
        top: 0,
        left: -100,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <ContainerCenter
        disableGutters
        sx={{ padding: { xs: "1rem 0", md: "0 0 1rem 0.8rem" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          gap="0.4rem"
          position="relative"
          width="80%"
          overflow="hidden"
          justifyContent="center"
        >
          <IconButton
            onClick={ScrollLeftButton}
            sx={{ position: "absolute", left: 0, padding: 0 }}
          >
            <ArrowCircleLeftRounded color="primary" fontSize="large" />
          </IconButton>{" "}
          <Container
            disableGutters
            sx={{
              overflowX: "scroll",
              display: "flex",
              flexDirection: "row",
              gap: 1,
              width: "80%",
              margin: 0,
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
            ref={containerReft}
          >
            {users.map((user: any) => (
              <React.Fragment key={user.id}>
                <StoryComponent user={user} />
              </React.Fragment>
            ))}
          </Container>
          <IconButton
            onClick={ScrollRightButton}
            sx={{ position: "absolute", right: 0, padding: 0 }}
          >
            <ArrowCircleRightRounded color="primary" fontSize="large" />
          </IconButton>
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
