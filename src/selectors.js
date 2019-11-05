import * as R from "ramda"

export const getFlyBlocksById = (state, price) => R.prop(price, state.flyBlocks)

export const getFlyBlocks = state => {
    const flyBlocks = R.map(price => getFlyBlocksById(state, price), state.flyBlocksPage.ids)
    const bySortFlyBlocks =  R.sort(R.ascend(R.prop("price")), flyBlocks);
    return bySortFlyBlocks
}
