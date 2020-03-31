import React from 'react';
import RoomsFilter from '../RoomsFilter/RoomsFilter';
import RoomsList from '../RoomsList/RoomsList';
import {useSelector} from 'react-redux';
import Loading from '../Loading/Loading';
import {Link} from 'react-router-dom';

const RoomsContainer = () => {
    const globalRooms = useSelector(state => state.rooms.rooms);
    const loading = useSelector(state => state.rooms.loading);
    const error = useSelector(state => state.rooms.error);
    const [rooms, setRooms] = React.useState([]);
    const [filteringOptions, setFilteringOptions] = React.useState({
        type     : 'all',
        capacity : 'all',
        price    : 0,
        minPrice : 0,
        maxPrice : 0,
        minSize  : 0,
        maxSize  : 0,
        breakfast: false,
        pets     : false
    });


    React.useEffect(() => {
        if (globalRooms.length) {
            setRooms(globalRooms);
            setFilteringOptions({
                ...filteringOptions,
                maxPrice: Math.max(...globalRooms.map(c => c.price)),
                maxSize : Math.max(...globalRooms.map(c => c.size))
            });
        }
    }, [globalRooms]);


    const filterRoomsHandler = React.useCallback(options => {

        let tempRooms = [...globalRooms];
        if (options.type !== 'all')
            tempRooms = tempRooms.filter(c => c.type === options.type);

        if (options.capacity !== 'all')
            tempRooms = tempRooms.filter(c => c.capacity >= parseInt(options.capacity));

        if (parseInt(options.price) !== 0)
            tempRooms = tempRooms.filter(c => c.price <= parseInt(options.price));


        //filter by size
        tempRooms = tempRooms.filter(c =>
            c.size >= parseInt(options.minSize) &&
            c.size <= parseInt(options.maxSize)
        );

        //filter by breakfast , pets

        if (options.breakfast)
            tempRooms = tempRooms.filter(c => c.breakfast === true);

        if (options.pets)
            tempRooms = tempRooms.filter(c => c.pets === true);


        setRooms(tempRooms);
        setFilteringOptions(options);
    });

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
                        rooms &&
                        <>
                            <RoomsFilter optionsValue={filteringOptions}
                                         onFilterChange={filterRoomsHandler}/>
                            <RoomsList rooms={rooms}/>
                        </>

            }
        </>
    );
};

export default RoomsContainer;
