import {
  FIND_SEARCH_ALBUMS,
  FIND_HOME_ALBUMS,
} from "../../actions/albums-actions";

const albumsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_HOME_ALBUMS:
      return action.albums;
    case FIND_SEARCH_ALBUMS:
      return action.albums;
    default:
      return state;
  }
};
export default albumsReducer;
