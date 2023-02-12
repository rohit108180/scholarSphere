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
import Wrapper from "../css/wrapper/PostCard";
import projectImg from "../assets/images/project.jpg";
import { ProfileIcon } from "./ProfileIcon";

const ExpandMore = styled((props) => {




  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PostCard({post}) {
  const {createdBy, date, description , type, title, _id}=  post;

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const dateObj = new Date(date);
  const dateString = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  return (
    <Wrapper>
      <Card className="post-card">
        <CardHeader
          avatar={<ProfileIcon />}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Rohit Sharma"
          subheader={dateString}
        />
        <img src={projectImg} alt="project" className="img" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description.slice(0, 100)}...
          </Typography>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph>{title}</Typography>
              <Typography paragraph>
               {
                description
               }
              </Typography>
            
            </CardContent>
          </Collapse>
        </CardContent>
        <CardActions disableSpacing>
          <span className="likes">231</span>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>

          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    </Wrapper>
  );
}
