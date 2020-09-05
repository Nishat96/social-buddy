import React, { useEffect, useState } from 'react';
import UserImage from '../UserImage/UserImage';

const ImageArea = () => {
    const [userImg, setUserImg] = useState([]);
    useEffect(() => {
        const url = 'https://randomuser.me/api/';
        fetch(url)
        .then(res => res.json())
        .then(data => setUserImg(data.results))
    },[])

    return (
        <div>
            { 
                userImg.map(userImage => 
                <UserImage
                userImage={userImage}
                ></UserImage>)
            }
        </div>
    );
};

export default ImageArea;