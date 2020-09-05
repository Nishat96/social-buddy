import React, { useState, useEffect } from 'react';
import './Comments.css';
import { useParams } from 'react-router-dom';
import CommentDetails from '../CommentDetails/CommentDetails';

const Comments = () => {
    const {postId} = useParams();
    const [comments, setComments] = useState([]);
    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    },[])
   
    return (
        <div> <hr/>
            <p className="all-comments">All Comments</p> <hr/>
            {
                comments.map(commentDetails => 
                    <CommentDetails
                    commentDetails={commentDetails}
                    ></CommentDetails>)
                }
        </div>
    );
};

export default Comments;        