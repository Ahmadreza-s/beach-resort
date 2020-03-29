import React from 'react';
import './Title.css';

const Title = props => {
    return (
        <div className='section-title'>
            <h4>{props.children}</h4>
            <div/>
        </div>
    );
};

export default Title;
