import photo1 from "/assets/photo1.jpg";
import user1 from "/assets/user1.jpg";

import {Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  IconButton,
  Typography,} from "@mui/material";


import {
  Favorite,
  ChatBubbleOutline,
  Send,
  MoreHoriz,
} from "@mui/icons-material";

export const Post = () => {
  return (
    <Card sx={{ color: "black", maxWidth: "24rem" }}>
      {/* Header with user information */}
      <CardHeader
        avatar={<Avatar src={user1} />}
        title="Username"
        subheader="Location"
        action={
          <IconButton aria-label="settings">
            <MoreHoriz></MoreHoriz>
          </IconButton>
        }
      />

      {/* Image or video content */}
      <CardMedia component="img" height="500" image={photo1} alt="Post Image" />

      {/* Like, Comment, and Send buttons */}
      <CardContent>
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
      <CardContent>
        <Typography variant="body1">
          <strong>Username:</strong> Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. #Instagram #Post
        </Typography>
      </CardContent>
    </Card>
  );
};
