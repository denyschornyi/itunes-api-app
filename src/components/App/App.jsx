import React, { Component } from 'react';

import './App.css';

import ItunesService from '../../service/ItunesService'
import AlbumList from '../AlbumList'
import SearchInput from '../SearchInput'

export default class App extends Component {
    itunesService = new ItunesService();

    onSearchChange(term){
        console.log(term);
    }

    render(){
        return (
            <>
                <div className="container">
                    <SearchInput onSearchChange={this.onSearchChange}/>
                    <AlbumList getData={this.itunesService.getAlbums}/>
                </div>
            </>
        )
    }    
} 