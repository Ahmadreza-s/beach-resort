import React from 'react';
import loadingGIF from '../../assets/images/gif/loading-arrow.gif';

const Loading = ({message}) => {
    return (
        <div className='loading'>
            <h4>{message}</h4>
            <img src={loadingGIF} alt='Loading GIF'/>
        </div>
    );
};

export default Loading;
