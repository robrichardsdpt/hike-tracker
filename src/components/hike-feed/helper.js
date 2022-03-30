export const filterData = (searchContents, hikes) => {
  let searchContentsLowerCase = searchContents.toLowerCase();
  return hikes
    .filter(
      (item) =>
        item.mountainsClimbed
          ?.toLowerCase()
          .includes(searchContentsLowerCase) ||
        item.trails.toLowerCase().includes(searchContentsLowerCase) ||
        item.hikedWith?.toLowerCase().includes(searchContentsLowerCase) ||
        item.trailNotes?.toLowerCase().includes(searchContentsLowerCase) ||
        item.owner.email.toLowerCase().includes(searchContentsLowerCase)
    )
    .sort((a, b) => {
      let aa = a.date.split("/").reverse().join(),
        bb = b.date.split("/").reverse().join();
      return bb < aa ? -1 : bb > aa ? 1 : 0;
    });
};
