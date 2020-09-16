import React from 'react';

import './AlbumItem.css';

const AlbumItem = ({index, id, img, artistName, albumName, releaseDate, price}) => {
    return (
        <div className='albumItem'>
            <img src={img} alt="img"/>
            <div className="albumItem-body">
                <div>{artistName}</div>
                <div>{albumName}</div>
                <div>{releaseDate}</div>
                <div>{price}</div>
            </div>
        </div>
    );
}

export default AlbumItem;