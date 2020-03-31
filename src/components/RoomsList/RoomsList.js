import React from 'react';
import Room from '../Room/Room';
import './RoomList.css';

const RoomsList = ({rooms}) => {
    return (
        <>
            {
                !rooms.length ?
                    <div className='empty-search'>
                        <h3>unfortunately no rooms matched your search</h3>
                    </div>
                    :
                    <section className='rooms-list'>
                        <div className="rooms-list-center">
                            {
                                rooms.map(room => <Room key={room.id} room={room}/>)
                            }
                        </div>
                    </section>
            }
        </>
    );
};

export default RoomsList;
