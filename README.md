# proximity-search

## Install

```bash
npm install proximity-search
```

## Usage
```javascript
import ProximitySearch from "proximity-search"

let position = {
    latitude: -30.07866404815339,
    longitude: -51.03899232898299
}

let options: {
    neighbors: false,
    precision: 5
}

ProximitySearch.search(position, options)
    .then(results => {
        for(result of results) {
            let { id, name, tags, lat, lng } = result
            console.log({ id, name, tags, lat, lng })
        }
    })
```


## Options

| Option | Default | Description |
|:-------|:--------|:------------|
| endpoint | https://cdn.jsdelivr.net/gh/diasfs/osm-proximity@latest/poi-data | The endpoint used to search the content. The final url will be the combination of endpoint, precision and the geohash of the position in the precision (https://[endpoint]/[precision]/[geohash].json). The default endpoint will only return results in brazil |
| precision | 5 | The geohash precision used to calculate the position geohash. [Wikipedia](https://en.wikipedia.org/wiki/Geohash#Digits_and_precision_in_km)
| neighbors | false | If true, search in the neighbors areas too |