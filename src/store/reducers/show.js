import * as actionTypes from "../actionTypes"

const initialState = {
    singleShow: {
        isLoading: false,
        data: null,
        error: null,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RESET_FETCH_SINGLE_SHOW_DETAILS_WATCHER:
            return initialState;
        case actionTypes.FETCH_SINGLE_SHOW_DETAILS_WATCHER:
            return {
                ...state,
                singleShow: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_SHOW_DETAILS_SUCCESS:
            return {
                ...state,
                singleShow: {
                    isLoading: false,
                    data: action.payload,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_SHOW_DETAILS_FAILURE:
            return {
                ...state,
                singleShow: {
                    isLoading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
        return state;

    }
}