import React from 'react';
import './FeaturedRooms.css';
import {useSelector} from 'react-redux';
import Loading from '../Loading/Loading';
import Room from '../Room/Room';
import Title from '../Title/Title';

const FeaturedRooms = () => {

    const loading = useSelector(state => state.rooms.loading);
    const error = useSelector(state => state.rooms.error);
    const rooms = useSelector(state => state.rooms.rooms);
    return (
        <section className='featured-rooms'>
            <Title>featured rooms</Title>
            <div className='featured-rooms-center'>
                {
                    loading ?
                        <Loading message='Rooms data loading...'/> :
                        error ?
                            <h2>Something bad happened : {error}</h2> :
                            rooms.map(room => <Room key={room.id} room={room}/>)

                }
            </div>
        </section>
    );
};

export default FeaturedRooms;
