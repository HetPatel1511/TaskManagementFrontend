import * as actionTypes from "../actionTypes"

const initialState = {
    singleLeague: {
        isLoading: false,
        data: null,
        error: null,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RESET_FETCH_SINGLE_LEAGUE_DETAILS_WATCHER:
            return initialState;
        case actionTypes.FETCH_SINGLE_LEAGUE_DETAILS_WATCHER:
            return {
                ...state,
                singleLeague: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_LEAGUE_DETAILS_SUCCESS:
            return {
                ...state,
                singleLeague: {
                    isLoading: false,
                    data: action.payload,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_LEAGUE_DETAILS_FAILURE:
            return {
                ...state,
                singleLeague: {
                    isLoading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
        return state;

    }
}