import React from 'react';
import Hero from '../../components/Hero/Hero';
import './Rooms.css';
import {Link} from 'react-router-dom';
import Banner from '../../components/Banner/Banner';
import defaultBg from '../../assets/images/room-4.jpeg';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';

const Rooms = () => {
    return (
        <>
            <Hero image={defaultBg}>
                <Banner title='Our rooms'>
                    <Link to='/' className='btn-primary'>
                        return home
                    </Link>
                </Banner>
            </Hero>
            <RoomsContainer/>
        </>
    );
};

export default Rooms;
