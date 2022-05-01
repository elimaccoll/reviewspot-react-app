export const createArtistsString = (artists) => {
  let artists_str = "";
  artists.forEach((artist, ind) => {
    artists_str += artist.name;
    if (ind !== artists.length - 1) artists_str += ", ";
  });
  return artists_str;
};

export const userAlreadyReviewedAlbum = (reviews, userId) => {
  for (let i = 0; i < reviews.length; i++) {
    const review = reviews[i];
    if (review.authorInfo.authorId === userId) return review;
  }
  return null;
};
