import * as R from "ramda"

import {
    FETCH_BLOCKS_SUCCESS
} from "../actionTypes";

const initialState = {
    ids: []
}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BLOCKS_SUCCESS:
            return R.merge(state, {
                ids: R.pluck("price", payload)
            })
        default:
            return state
    }
}