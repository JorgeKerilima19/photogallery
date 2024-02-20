import { Box, Container, Hidden, IconButton, Typography } from "@mui/material";
import { StoryComponent } from "../homepage/StoryComponent";
import { ContainerCenter, ContainerRight } from "../../styles/styles";
import { Post } from "../homepage/Post";
import { Suggestion } from "../homepage/Suggestion";
import React, { useContext, useEffect, useRef, useState } from "react";
import AppContext from "../../context/AppContext";

import {
  ArrowCircleLeftRounded,
  ArrowCircleRightRounded,
} from "@mui/icons-material";

export const HomePage = () => {
  const { users } = useContext(AppContext);
  const containerReft = useRef<HTMLDivElement>(null);
  const [scrollStart, setScrollStart] = useState<boolean>(true);
  const [scrollEnd, setScrollEnd] = useState<boolean>(false);

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

  useEffect(() => {
    const controlScroll = () => {
      if (containerReft.current) {
        setScrollStart(containerReft.current?.scrollLeft === 0);
        setScrollEnd(
          containerReft.current?.scrollLeft ===
            containerReft.current?.scrollWidth -
              containerReft.current?.offsetWidth
        );
      }
    };
    containerReft.current?.addEventListener("scroll", controlScroll);
    return () => {
      containerReft.current?.removeEventListener("scroll", controlScroll);
    };
  }, []);

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
            disabled={!scrollStart ? false : true}
          >
            <ArrowCircleLeftRounded
              color={`${!scrollStart ? "primary" : "disabled"}`}
              sx={{ fill: `${scrollStart ? "" : "#7ED957"}` }}
              fontSize="large"
            />
          </IconButton>
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
            disabled={!scrollEnd ? false : true}
          >
            <ArrowCircleRightRounded
              color={`${!scrollEnd ? "primary" : "disabled"}`}
              sx={{ fill: `${scrollEnd ? "" : "#7ED957"}` }}
              fontSize="large"
            />
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
          <>
            {users
              .filter((user: any) => user.id < 4)
              .map((user: any) => (
                <Suggestion user={user} />
              ))}
          </>
        </ContainerRight>
      </Hidden>
    </>
  );
};
