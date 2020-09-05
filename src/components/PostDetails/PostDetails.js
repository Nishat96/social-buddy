import React, { useState, useEffect } from 'react';
import './PostDetails.css';
import { useParams, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import CreateIcon from '@material-ui/icons/Create';

const PostDetails = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPost(data));
    },[])
    return (
        <div className="post-details">
            <div className="post-info"> 
                <p className="userId">User: {post.userId}</p>
                <p className="postTitle">Title: {post.title}</p>
                <p className="postBody"> <CreateIcon></CreateIcon>{post.body}</p>
            </div>
            <div>
                <h4>
                   <Comments></Comments>
                </h4>
            </div>
        </div>
       
    );
};

export default PostDetails;