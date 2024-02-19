import { ProfileContainer } from "../../styles/styles";

import profileImg from "/assets/photo5.jpg";
import { posts } from "../../data/PostData";

import { Card, CardMedia, Divider } from "@mui/material";

import {
  Grid,
  Container,
  Avatar,
  Typography,
  Box,
  Button,
} from "@mui/material";

import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { StoryComponent } from "../homepage/StoryComponent";

export const ProfilePage = () => {
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("lg"));

  const about = (
    <Box padding="1rem 0">
      <Typography variant="subtitle1">Name</Typography>
      <Typography variant="inherit">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
        beatae?;
      </Typography>
    </Box>
  );

  return (
    <ProfileContainer>
      <Grid container>
        <Grid
          item
          xs={12}
          sm={1.8}
          lg={3}
          sx={{ display: "grid", placeItems: "center" }}
        >
          <Avatar
            src={profileImg}
            sx={{
              height: `${isSmallDevice ? "4rem" : "7.4rem"}`,
              width: `${isSmallDevice ? "4rem" : "7.4rem"}`,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={10.2} lg={9}>
          <Grid
            container
            sx={{
              display: { xs: "grid", sm: "flex" },
              placeItems: "center",
              gap: { xs: "1rem", sm: "0" },
            }}
          >
            <Grid item xs={12} sm={6}>
              <Typography variant="h6">UserName</Typography>
            </Grid>
            <Grid item display="flex" xs={12} sm={6} gap={1}>
              <Button variant="contained" size="small">
                <Typography variant="caption">EditProfile</Typography>
              </Button>
              <Button variant="contained" size="small">
                <Typography variant="caption">View Archives</Typography>
              </Button>
            </Grid>
          </Grid>
          <>
            {!isSmallDevice ? (
              <Box display="flex" gap={4} paddingTop={2}>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography variant="subtitle1">3</Typography>
                  <Typography variant="inherit">Post</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography variant="subtitle1">8</Typography>
                  <Typography variant="inherit">Followers</Typography>
                </Box>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography variant="subtitle1">14</Typography>
                  <Typography variant="inherit">Following</Typography>
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </>
          <>{isSmallDevice ? <></> : <>{about}</>}</>
        </Grid>
      </Grid>
      <Container disableGutters>
        <Box>{!isSmallDevice ? <></> : <>{about}</>}</Box>
        <Box display="flex" paddingTop="1rem">
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
          <StoryComponent />
        </Box>
      </Container>
      <Divider variant="fullWidth" sx={{ marginTop: 2, marginBottom: 2 }} />
      <Grid container spacing={1}>
        {posts.map((post) => (
          <Grid item key={post.id} xs={4} zIndex={-1}>
            <div
              style={{
                position: "relative",
                width: "100%",
                paddingBottom: "100%",
              }}
            >
              <Card
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                }}
              >
                <CardMedia
                  component="img"
                  image={post.content}
                  alt={`Image`}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            </div>
          </Grid>
        ))}
      </Grid>
    </ProfileContainer>
  );
};
