const hikeTotalDistance = (hikes) => hikes.reduce((accumulator, hike) => {
  return accumulator += hike.distance
}, 0)
const hikeTotalElevation = (hikes) => hikes.reduce((accumulator, hike) => {
  return accumulator += hike.elevation
}, 0)

module.exports = {
  hikeTotalDistance,
  hikeTotalElevation
}