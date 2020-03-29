import React from 'react';
import {useParams} from 'react-router-dom';

const SingleRoom = () => {
    const {slug} = useParams();
    console.log(slug);
    return (
        <div>
            single room
        </div>
    );
};

export default SingleRoom;
