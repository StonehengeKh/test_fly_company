import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"

import flyBlocks from "./flyblocks"
import flyBlocksPage from "./flyBlocksPage"

export default history => combineReducers({
    flyBlocks,
    flyBlocksPage,
    router: connectRouter(history)
})