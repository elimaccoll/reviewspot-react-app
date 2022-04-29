import * as service from "../services/albums-services";

export const FIND_HOME_ALBUMS = "FIND_HOME_ALBUMS";
export const FIND_SEARCH_ALBUMS = "FIND_SEARCH_ALBUMS";

export const findHomeAlbums = async (dispatch) => {
  const albums = await service.findHomeAlbums();
  dispatch({
    type: FIND_HOME_ALBUMS,
    albums,
  });
};

export const findSearchAlbums = async (dispatch) => {
  const albums = await service.findSearchAlbums();
  dispatch({
    type: FIND_SEARCH_ALBUMS,
    albums,
  });
};
