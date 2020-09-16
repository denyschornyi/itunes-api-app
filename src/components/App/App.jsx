import React from 'react';

import ItunesService from '../../service/ItunesService'

const App = () => {
    const itunesService = new ItunesService();
    itunesService.getAlbums()
            .then(albums => console.log(albums))
    return (
        <h1>hey</h1>
    )
}

export default App;