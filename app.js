export class FENCE {
  // https://www.movable-type.co.uk/scripts/latlong.html
  // This was a huge help in making this lib
  constructor (data) {
    // this will be an array of objects
    /*
    [{
      name: STRING,
      center: {
        latitude: FLAOT,
        longitude: FLOAT,
      },
      radius: INT // IN METERS FROM CENTER
    }]
    */
    this.data = data
  }

  static toRadians (val) {
    return val * Math.PI / 180
  }

  static pointInsideCircle (point, circle) {
    const { center } = circle
    const distance = this.distanceBetween(point, center)
    return distance <= circle.radius // Use '<=' if you want to get all points in the border
  }

  static distanceBetween (point1, point2) {
    const R = 6371e3 // metres
    const φ1 = this.toRadians(point1.latitude)
    const φ2 = this.toRadians(point2.latitude)
    const Δφ = this.toRadians(point2.latitude - point1.latitude)
    const Δλ = this.toRadians(point2.longitude - point1.longitude)

    const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
          Math.cos(φ1) * Math.cos(φ2) *
          Math.sin(Δλ / 2) * Math.sin(Δλ / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c
  }
  // check is an object { latitude: 11.11111, longitude: 11.11111 }
  isInside (check) {
    const dataPoints = this.data
    const TEMP = []
    for (const point in dataPoints) {
      TEMP.push(this.pointInsideCircle(check, { center: dataPoints[point].center, radius: dataPoints[point].radius }))
    }
    const LOOK = TEMP.includes(true)
    return LOOK
  }
}
