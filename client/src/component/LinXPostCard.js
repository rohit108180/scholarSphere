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
import { useAppcontext } from "../context/appContext";
import { useState } from "react";
import { formateDate } from "../utils/stringUtils";
import { Chip, Stack } from "@mui/material";
import { track } from "../usage-tracking";

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




export default function LinXPostCard({ post }) {

  const { toggleLinXLike, user, postComment } = useAppcontext();

  const { poster, poster_bio, profile, feed_text, createdAt, status, likes, summary, reason, tags, feed_html, _id, relevance } = post;

  const [comment, setComment] = useState("");
  const [loading , setLoading] = useState(false);

  const handleChange = (e)=>{
    setComment(e.target.value);
  }

  const handleSubmit = () =>{
    console.log("posting the comment");
    setLoading(true);
    // postComment(comment, _id);
    setComment("");
    setLoading(false);
  }

  const [expanded, setExpanded] = React.useState(false);



  const handleExpandClick = () => {
    track(`${!expanded? "Expanded ":"Unexpanded"} a post`, {postId: _id, summary:summary })
    setExpanded(!expanded);
  };
  

  const isLiked = (postId) => {
    const likedPosts = localStorage.getItem("likedPosts") || [];
    if(likedPosts.includes(postId)) return true;
    return false;
  }


  return (
  
    <Wrapper>
      <Card className="post-card">
        <CardHeader
          avatar={<ProfileIcon avatar={null} name={poster}/>}
          // action={
          //   <IconButton aria-label="settings">
          //     <MoreVertIcon />
          //   </IconButton>
          // }
          title= {<React.Fragment><a href={profile} onClick={()=>track("Clicked on profile link", {postId: _id, profile})}>{poster}</a> | {formateDate(createdAt)}</React.Fragment>}
          subheader={poster_bio}
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
          <b>Summary : </b>
            {summary}
          </Typography>
          <Stack direction="row" spacing={1} style={{marginTop:"1rem", width:"100%", flexWrap: "wrap"}}>
            {
              tags?.split(",")?.slice(0,4)?.map(tag=> <Chip label= {tag}  variant="outlined" style={{transform:"scale(0.9)"}}/> )
            }
        </Stack>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph dangerouslySetInnerHTML={{ __html: feed_html }}></Typography>
              {/* {comments.length&&
              <div>
              <Typography variant="h6">Comments</Typography>
              {comments.map(comment=>{
                return <div ><Typography variant="p" style={{fontWeight: 600, fontSize:"0.8rem", padding:"0 1rem"}}>{formateDate(comment.date)}</Typography>{comment.comment_message}</div>
              })}
              </div>
            } */}
              
            </CardContent>
          </Collapse>
        </CardContent>
        <CardActions disableSpacing>
          
          {/* <span className="likes">{likes || 0}</span> */}
          <IconButton
            aria-label="add to favorites"
            className="like"
            onClick={() => toggleLinXLike(_id)}
          >

            <FavoriteIcon className={ isLiked(_id) ? "liked" : null} />

            
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
        {/* <div className="post-something">
            <input
              type="text"
              // value={value}
              name="comment"
              value = {comment}
              onChange={handleChange}
              className="form-input"
              placeholder="comment something ..."
            />
            <button type="button" className="btn"
            onClick={handleSubmit}
            disabled={loading}>

              Comment
            </button>
          </div> */}
      </Card>
    </Wrapper>
  );
}
