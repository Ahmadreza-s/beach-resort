import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Rooms.css';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';

const Rooms = () => {
    return (
        <Hero hero='roomsHero'>
            <Banner title='Our rooms'>
                <Link to='/' className='btn-primary'>
                    return home
                </Link>
            </Banner>
        </Hero>
    );
};

export default Rooms;
