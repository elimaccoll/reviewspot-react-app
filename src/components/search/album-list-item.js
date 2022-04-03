import React from 'react';

const AlbumListItem = ({album}) => {
    let artists = "";
    album.artists.forEach((artist, ind) => {
        artists += artist.name;
        if (ind !== album.artists.length - 1) artists += ', ';
    });

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-4">
                    <img src={album.images[0].url} className="rs-img-128 img-fluid" alt="Album cover"/>
                </div>
                <div className="col-8">
                    <div className="fw-bolder">{album.name}</div>
                    <div>{artists}</div>
                    <div>Release Date: {album.release_date}</div>
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" role="progressbar" style={{"width": `${album.popularity}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default AlbumListItem;