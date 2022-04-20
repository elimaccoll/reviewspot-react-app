export const createArtistsString = (artists) => {
  let artists_str = "";
  artists.forEach((artist, ind) => {
    artists_str += artist.name;
    if (ind !== artists.length - 1) artists_str += ", ";
  });
  return artists_str;
};
