import * as actionTypes from './rooms.types';
import data from '../../data';

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

export const fetchRooms = () => dispatch => {
    dispatch(fetchRoomsStart());
    //fetch data from server
    dispatch(fetchRoomsSuccess(formatData(data)));
    //fetchroomsfailure
};
