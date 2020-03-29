import React from 'react';
import './Hero.css';

const hero = props => {
    return (
        <header className={props.hero}>
            {props.children}
        </header>
    );
};

hero.defaultProps = {
    hero: 'defaultHero'
};

export default hero;
