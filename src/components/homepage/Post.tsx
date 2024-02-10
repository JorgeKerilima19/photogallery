import photo1 from "/assets/photo1.jpg";
import user1 from "/assets/user1.jpg";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
  Typography,
  Box,
} from "@mui/material";

import {
  Favorite,
  ChatBubbleOutline,
  Send,
  MoreHoriz,
} from "@mui/icons-material";

export const Post = () => {
  return (
    <Card sx={{ maxWidth: "max(80%,25rem)", zIndex: "0" }}>
      {/* Header with user information */}
      <CardHeader
        avatar={<Avatar src={user1} />}
        action={
          <IconButton aria-label="settings">
            <MoreHoriz></MoreHoriz>
          </IconButton>
        }
        title="Username"
        titleTypographyProps={{ fontSize: "0.95rem" }}
      />

      {/* Image or video content */}
      <CardMedia component="img" height="500" image={photo1} alt="Post Image" />

      {/* Like, Comment, and Send buttons */}
      <CardContent sx={{ padding: "0.5rem 0 0 0.5rem" }}>
        <IconButton aria-label="like">
          <Favorite />
        </IconButton>
        <IconButton aria-label="comment">
          <ChatBubbleOutline />
        </IconButton>
        <IconButton aria-label="send">
          <Send />
        </IconButton>
      </CardContent>

      {/* Caption and comments */}
      <CardContent sx={{ padding: "0.9rem" }}>
        <Box display="flex" alignItems="baseline" gap={0.5}>
          <Typography>45</Typography>
          <Typography>likes</Typography>
        </Box>
        <Typography variant="body1">
          <strong>Username</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. #Instagram #Post
        </Typography>
      </CardContent>
    </Card>
  );
};
