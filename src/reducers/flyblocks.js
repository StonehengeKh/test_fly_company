import * as R from "ramda"

import {FETCH_BLOCKS_SUCCESS} from "../actionTypes";

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case FETCH_BLOCKS_SUCCESS:
            const newValues = R.indexBy(R.prop("price"), payload)
            return R.merge(state, newValues)
        default:
            return state
    }
}