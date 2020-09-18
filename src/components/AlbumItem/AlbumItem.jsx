import React from 'react';

import './AlbumItem.css';

const AlbumItem = ({index, img, artistName, albumName, releaseDate, price}) => {

    return (
        <div className='albumItem'>
            <img src={img} alt="img"/>
            <div className="albumItem-body">
                <div className="album-name">{albumName}</div>
                <div className="artist-name">{artistName}</div>
                <div>{releaseDate}</div>
                <div>{price}</div>
            </div>
        </div>
    );
}

export default AlbumItem;