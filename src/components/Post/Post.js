import React from 'react';
import './Post.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import DehazeIcon from '@material-ui/icons/Dehaze';

const Post = (props) => {
    const {userId, id, title} = props.post;
    return (
        <div className="container">
            <div className="post-area">
                <p className="title">Title: {title}</p>
                <p className="post-id">User Id: {userId} 
                <br/> Id: {id} 
                <br/>
                <Link to = {`post/${id}`}>
                    <Button id="show-details" variant="contained">
                    <DehazeIcon></DehazeIcon> Show Details
                    </Button>
                </Link>
                </p> 
            </div>
        </div>
    );
};

export default Post;