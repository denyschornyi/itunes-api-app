import React from 'react';

import './AlbumItem.css';

const AlbumItem = ({index, id, img, artistName, albumName, releaseDate, price}) => {
    return (
        <li>
            <img src={img} alt="img"/>
            <div>{artistName}</div>
            <div>{albumName}</div>
            <div>{releaseDate}</div>
            <div>{price}</div>
        </li>
    );
}

export default AlbumItem;