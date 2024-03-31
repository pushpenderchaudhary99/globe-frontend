import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import SendIcon from "@mui/icons-material/Send";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { AvatarGroup, Input, TextField } from "@mui/material";
import Profile from "../Profile/Profile";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(0deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PostCard = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: "30rem" }}>
      <CardHeader
        avatar={
          <Avatar src="https://1.bp.blogspot.com/-3Ggysu81LSk/XFHOh3yROPI/AAAAAAADdqQ/A_XWLF_Rus8QQeS-N0WgdgL_3i08bLCNQCLcBGAs/s640/1AU4Y3T.jpg" />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Komal Negi"
        subheader="@beatch_bitch"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CardMedia
          component="img"
          image="https://1.bp.blogspot.com/-3Ggysu81LSk/XFHOh3yROPI/AAAAAAADdqQ/A_XWLF_Rus8QQeS-N0WgdgL_3i08bLCNQCLcBGAs/s640/1AU4Y3T.jpg"
          alt="Post"
          sx={{
            height: "30rem",
            width: "30rem",
            objectFit: "cover",
          }}
        />
      </div>
      {/* Post Action Buttons */}
      <div className="flex align"></div>
      <CardActions>
        <IconButton>
          <FavoriteBorderIcon sx={{ fontSize: "1.9rem" }} />
        </IconButton>
        <IconButton>
          <CommentIcon sx={{ fontSize: "1.9rem" }} />
        </IconButton>
        <IconButton>
          <SendIcon sx={{ fontSize: "1.9rem" }} />
        </IconButton>
      </CardActions>
      <div className="flex item-start">
        <AvatarGroup
          max={4}
          sx={{
            justifyContent: "start",
            "& .MuiAvatar-root": { height: "20px", width: "20px" },
          }}
        >
          {[1, 2, 3, 4, 5].slice(0, 3).map((profile, index) => (
            <Avatar
              key={index}
              src="https://1.bp.blogspot.com/-3Ggysu81LSk/XFHOh3yROPI/AAAAAAADdqQ/A_XWLF_Rus8QQeS-N0WgdgL_3i08bLCNQCLcBGAs/s640/1AU4Y3T.jpg"
            />
          ))}
          <span className="font-semibold pl-2">45,113 likes</span>
        </AvatarGroup>
      </div>

      <CardContent>
        <span className="font-semibold">beach_bitch</span>

        <span className="pl-2 text-gray-800 font-sans">
          Water's touch on me, then mine on you, true.
        </span>
      </CardContent>
      {/* Comment Section */}
      <div className="">
        <div className="pl-5 font-semibold opacity-70 cursor-pointer ">
          View all 119 comments
        </div>
        <div className="p-5">
          <Input fullWidth placeholder="Comments" inputProps={undefined} />
        </div>
      </div>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent></CardContent>
      </Collapse>
    </Card>
  );
};

export default PostCard;
