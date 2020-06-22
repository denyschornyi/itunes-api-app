import React from 'react';

import './list';

import ItunesService from './service/itunes-service';

const List = () => {
    const data = new ItunesService();
    
    data.getAlbums().then( albums => {
      
    });

    return ( 
        <div className="list-group music-list">
            
        </div>
    )
}

export default List;