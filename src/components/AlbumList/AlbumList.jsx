import React, { Component } from 'react';

import './AlbumList.css';

import Spinner from '../Spinner';
import AlbumItem from '../AlbumItem';

export default class AlbumList extends Component {

    state = {
        albumList: null
    }

    componentDidMount(){
        const { getData } = this.props;
        getData()
            .then(albumList => {
                this.setState({albumList: albumList})    
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

        if(!albumList){
            return <Spinner/>
        }
        
        const data = this.renderItem(albumList);

        return (
            <>
               {data}
            </>
        );
    }
}