import * as actionTypes from './rooms.types';

const initialState = {
    rooms        : [],
    sortedRooms  : [],
    featuredRooms: [],
    loading      : true,
    error        : null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_ROOMS_START:
            return {
                ...state,
                loading      : true,
                error        : null,
                rooms        : [],
                sortedRooms  : [],
                featuredRooms: []
            };
        case actionTypes.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                rooms        : state.rooms.concat(action.rooms),
                sortedRooms  : state.sortedRooms.concat(action.rooms),
                featuredRooms: state.featuredRooms.concat(action.featuredRooms),
                loading      : false
            };
        case actionTypes.FETCH_ROOMS_FAILURE:
            return {
                ...state,
                loading: false,
                error  : action.error
            };
        default:
            return state;
    }
};
export default reducer;
