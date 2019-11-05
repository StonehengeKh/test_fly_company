import {
    FETCH_BLOCKS_START,
    FETCH_BLOCKS_SUCCESS,
    FETCH_BLOCKS_FAILURE,
    CHANGE_STOPS
} from "../actionTypes"
import {fetchFlyBlocks as fetchFlyBlocksApi} from "../api"

export const fetchFlyBlocks = () => async dispatch => {
    dispatch({
        type: FETCH_BLOCKS_START
    })
    try {
        const flyBlocks = await fetchFlyBlocksApi()
        dispatch({
            type: FETCH_BLOCKS_SUCCESS,
            payload: flyBlocks
        })
    } catch(err) {
        dispatch({
            type: FETCH_BLOCKS_FAILURE,
            payload: err,
            error: true
        })
    }
}

export const changeStops = text => dispatch => {
    dispatch({
        type: CHANGE_STOPS,
        payload: text
    })
}