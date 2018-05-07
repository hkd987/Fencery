# Fencery
A small helper to allow the developer to set up a geo-fence and determine if a input is inside the fence.
***
## Usage
```javascript
import FENCE from 'fencery'

const backyard = new FENCE([
  {
    name: 'NAME_OF_FACILITY',
    center: {
      // FLOAT NUMER 00.00000
      latitude: 11.11111,
      // FLOAT NUMBER 00.00000
      longitude: 11.11111,
    },
    // THIS IS METERS OUT FROM THE CENTER POINT
    radius: 75
  }
])

// RETURNS A TURE ?? FALSE
const check = backyard.isInside({
  latitude: 11.11111,
  longitude: 11.11111
})
```
