import GeoHash from "ngeohash"

export const search = async ({ latitude, longitude }, { neighbors = false, precision = 5, endpoint = "https://cdn.jsdelivr.net/gh/diasfs/osm-proximity@latest/poi-data" } = {}) => {
    let hashs = [GeoHash.encode(latitude, longitude, precision)]

    if (neighbors) {
        let [hash] = hashs
        hashs = [...hashs, ...GeoHash.neighbors(hash)]
    }

    let promises = hashs.map(async hash => {
        let url = `${endpoint}/${precision}/${hash}.json`
        return await fetch(url).then(resp => resp.json()).catch(() => { return [] })
    })
    return (await Promise.all(promises)).reduce((acc, pois) => ([...acc, ...pois]))
}

export default search