import React from 'react';
import './Hero.css';
import defaultBackground from '../../assets/images/defaultBcg.jpeg';

const hero = ({image, children}) => {
    const classes = ['hero'];
    classes.push(image ? 'roomsHero' : 'defaultHero');
    return (
        <header className={classes.join(' ')} style={{
            background: image ? `url('${image}') center/cover no-repeat` :
                `url("${defaultBackground}") center/cover no-repeat`
        }}>
            {children}
        </header>
    );
};

hero.defaultProps = {
    hero: 'defaultHero'
};

export default hero;
