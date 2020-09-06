import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const Post = (props) => {
    const {userId, id, title} = props.post;

     const useStyles = makeStyles({
     });
    const classes = useStyles();

return (
      <Card id="card-container">
        <CardContent >
           <Typography className="title" variant="h5" component="h2">
                Title: {title}
            </Typography>
            <Typography id="post-id" className={classes.title}  gutterBottom>
                User Id: {userId}
            </Typography>
            <Typography className={classes.pos} >
                Id: {id}
            </Typography>
       </CardContent>
       <CardActions>
            <Link to = {`post/${id}`}>
              <Button id="show-details" variant="contained"><DehazeIcon></DehazeIcon> Show Details</Button>
            </Link> 
        </CardActions>
      </Card>
    );
};

export default Post;