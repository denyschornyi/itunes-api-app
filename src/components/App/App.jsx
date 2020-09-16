import React from 'react';

import './App.css';

import ItunesService from '../../service/ItunesService'
import AlbumList from '../AlbumList'

const App = () => {
    const itunesService = new ItunesService();

    return (
        <>
            <div className="container">
                <AlbumList getData={itunesService.getAlbums}/>
            </div>
        </>
    )
}

export default App;