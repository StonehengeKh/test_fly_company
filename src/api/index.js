import flyBlocks from "./mockFlyDatas"

export const fetchFlyBlocks = async () => {
    return new Promise((resolve, reject) => {
        resolve(flyBlocks)
    })
}