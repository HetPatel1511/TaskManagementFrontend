import * as actionTypes from "../actionTypes"

const initialState = {
    singlePodcast: {
        isLoading: false,
        data: null,
        error: null,
    }
}

export default (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.RESET_FETCH_SINGLE_PODCAST_DETAILS_WATCHER:
            return initialState;
        case actionTypes.FETCH_SINGLE_PODCAST_DETAILS_WATCHER:
            return {
                ...state,
                singlePodcast: {
                    isLoading: true,
                    data: null,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_PODCAST_DETAILS_SUCCESS:
            return {
                ...state,
                singlePodcast: {
                    isLoading: false,
                    data: action.payload,
                    error: null
                }
            }
        case actionTypes.SET_SINGLE_PODCAST_DETAILS_FAILURE:
            return {
                ...state,
                singlePodcast: {
                    isLoading: false,
                    data: null,
                    error: action.payload
                }
            }
        default: 
        return state;

    }
}