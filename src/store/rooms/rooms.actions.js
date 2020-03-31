import * as actionTypes from './rooms.types';
import client from '../../contentful/contentful';

const formatData = items =>
    items.map(item => ({
        ...item.fields,
        id    : item.sys.id,
        images: item.fields.images.map(image => image.fields.file.url)
    }));


const fetchRoomsStart = () => ({type: actionTypes.FETCH_ROOMS_START});
const fetchRoomsFailure = error => ({type: actionTypes.FETCH_ROOMS_FAILURE, error});
const fetchRoomsSuccess = rooms => ({
    type: actionTypes.FETCH_ROOMS_SUCCESS,
    rooms
});

export const fetchRooms = () => async dispatch => {
    dispatch(fetchRoomsStart());
    try {
        const data = await client.getEntries({
            content_type: 'beachResortRooms',
            order       : 'sys.createdAt'
        });
        dispatch(fetchRoomsSuccess(formatData(data.items)));
    } catch (e) {
        dispatch(fetchRoomsFailure(e.message));
    }
};
