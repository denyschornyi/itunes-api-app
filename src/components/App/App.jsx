import React from 'react';

import './App.css';

import ItunesService from '../../service/ItunesService'
import AlbumList from '../AlbumList'

const App = () => {
    const itunesService = new ItunesService();

    return (
        <>
            <h1>hey</h1>
            <AlbumList getData={itunesService.getAlbums}/>
        </>
    )
}

export default App;