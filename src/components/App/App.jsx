import React, { Component } from 'react';

import './App.css';

import ItunesService from '../../service/ItunesService'
import AlbumList from '../AlbumList'
import SearchInput from '../SearchInput'

export default class App extends Component {

    itunesService = new ItunesService();

    state = {
        albumList: null,
        term: ''
    }

    componentDidMount(){
        this.itunesService.getAlbums()
        .then(albumList => {
            this.setState({albumList})   
        });
    }
    
    onSearchChange = (term) => {
        this.setState({term});
    }

    onAvalibleData(albumList, term){
        if(term.trim().length === 0){
            return albumList;
        }
        return albumList.filter(el => el.title.toLowerCase().indexOf(term) > -1)
    }

    render(){
        const {albumList, term} = this.state;
        
        const visibleData = this.onAvalibleData(albumList, term);
        console.log(albumList);
        return (
            <div className="container">
                    <SearchInput onSearchChange={this.onSearchChange}/>
                    <AlbumList data={visibleData}/>
            </div>
        )
    }    
} 