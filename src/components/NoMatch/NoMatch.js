import React from 'react';
import './NoMatch.css';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const NoMatch = () => {
    return (
        <div className="noMatch-area">
            <h3> Sorry! Route is not found <SentimentVeryDissatisfiedIcon></SentimentVeryDissatisfiedIcon> </h3>
        </div>
    );
};

export default NoMatch;