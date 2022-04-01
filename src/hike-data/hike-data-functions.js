export const hikeTotalDistance = (hikes) =>
  hikes.reduce((accumulator, hike) => {
    return (accumulator += hike.distance);
  }, 0);

export const hikeTotalElevation = (hikes) =>
  hikes.reduce((accumulator, hike) => {
    return (accumulator += hike.elevation);
  }, 0);
