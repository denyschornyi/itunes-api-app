import React, { Component } from 'react';

import './AlbumList.css';

import Spinner from '../Spinner';
import AlbumItem from '../AlbumItem';

export default class AlbumList extends Component {

    state = {
        albumList: null,
        loadig: true
    }

    componentDidMount(){
        const { getData } = this.props;
        getData()
            .then(albumList => {
                this.setState({albumList, loadig: false})    
            });
    }

    renderItem(arr){
        return arr.map( (item, index) => {

            const {id, img, artistName, albumName, releaseDate, price} = item
            return <AlbumItem key={id} 
                        index={index}
                        id={id}
                        img={img} 
                        artistName={artistName}
                        albumName={albumName}
                        releaseDate={releaseDate}
                        price={price} />
        });
    }

    render(){
        const { albumList } = this.state;
        
        return (
            <div className='albumList'>
               {albumList ? this.renderItem(albumList) : <Spinner/>}
            </div>
        );
    }
}