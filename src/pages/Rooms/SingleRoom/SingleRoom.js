import React from 'react';
import {Link, Redirect, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Hero from '../../../components/Hero/Hero';
import Banner from '../../../components/Banner/Banner';
import defaultBcg from '../../../assets/images/room-1.jpeg';
import './SingleRoom.css';
import Loading from '../../../components/Loading/Loading';

const SingleRoom = () => {
    const {slug} = useParams();
    const rooms = useSelector(state => state.rooms.rooms);
    const loading = useSelector(state => state.rooms.loading);
    const error = useSelector(state => state.rooms.error);


    let room = rooms.find(c => c.slug === slug);

    return (
        <>
            {
                loading ?
                    <Loading message='room is loading ...'/> :
                    error ?
                        <div className='error'>
                            <h3>something bad happened! message : {error}</h3>
                            <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                        </div> :
                        !room ?
                            <Redirect to='/404'/> :

                            <>
                                <Hero image={room.images[0] || defaultBcg}>
                                    <Banner title={`${room.name} room`}>
                                        <Link to={`/rooms`} className='btn-primary'>
                                            back to rooms
                                        </Link>
                                    </Banner>
                                </Hero>
                                <section className='single-room'>
                                    <div className='single-room-images'>
                                        {
                                            room.images.slice(1, 4).map((image, index) =>
                                                <img key={index} src={image} alt={room.name}/>
                                            )
                                        }
                                    </div>
                                    <div className="single-room-info">
                                        <article className="desc">
                                            <h3>details</h3>
                                            <p>{room.description}</p>
                                        </article>
                                        <article className='info'>
                                            <h3>info</h3>
                                            <h6>price : ${room.price}</h6>
                                            <h6>size : ${room.size} SQFT</h6>
                                            <h6>max capacity
                                                : {room.capacity} {room.capacity > 1 ? `People` : 'Person'}</h6>
                                            <h6>{room.pets ? 'pets allowed' : 'not pets allowed'}</h6>
                                            {room.breakfast && <h6>Free breakfast includede</h6>}
                                        </article>
                                    </div>
                                </section>
                                <section className="room-extras">
                                    <h6>extras</h6>
                                    <ul className="extras">
                                        {
                                            room.extras.map((extra, index) => <li key={index}>- {extra}</li>)
                                        }
                                    </ul>
                                </section>
                            </>
            }

        </>
    );
};

export default SingleRoom;
