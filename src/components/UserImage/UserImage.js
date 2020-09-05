import React from 'react';
import './UserImage.css';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

const UserImage = (props) => {
    const classes = useStyles();
    const {large} = props.userImage.picture;
    return (
        <div className="user-picture">
            <Avatar src={large} className={classes.large} />
        </div>
    );
};

export default UserImage;