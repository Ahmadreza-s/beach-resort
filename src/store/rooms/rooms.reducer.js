import * as actionTypes from './rooms.types';

const initialState = {
    rooms        : [],
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
            };
        case actionTypes.FETCH_ROOMS_SUCCESS:
            return {
                ...state,
                rooms        : state.rooms.concat(action.rooms),
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
