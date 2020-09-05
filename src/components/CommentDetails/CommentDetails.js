import React from 'react';
import './CommentDetails.css';
import ImageArea from '../ImageArea/ImageArea';
import PersonOutlineTwoToneIcon from '@material-ui/icons/PersonOutlineTwoTone';
import EmailTwoToneIcon from '@material-ui/icons/EmailTwoTone';
import CommentOutlinedIcon from '@material-ui/icons/CommentOutlined';


const CommentDetails = (props) => {
    const {id, name, email, body} = props.commentDetails;

    return (
       <div className="comment-section">
            <div className="comment-details">
                <div className="commenter-img">
                    <ImageArea></ImageArea>  
                </div>
                <div>
                    <p className="commenter-id">Commenter-Id: {id}</p>
                    <p className="commenter-info"> <PersonOutlineTwoToneIcon></PersonOutlineTwoToneIcon>{name} </p>
                    <p className="commenter-info"> <EmailTwoToneIcon></EmailTwoToneIcon> {email}</p>
                    <p className="comment"> <CommentOutlinedIcon></CommentOutlinedIcon> {body}</p>
                </div>
            </div>
       </div>
    );
};

export default CommentDetails;