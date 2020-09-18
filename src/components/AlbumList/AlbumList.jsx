import React, { Component } from 'react';

import './AlbumList.css';

import Spinner from '../Spinner';
import AlbumItem from '../AlbumItem';

export default class AlbumList extends Component {

    renderItem(arr){
        
        return arr.map( (item, index) => {

            const {id, img, artistName, albumName, releaseDate, price} = item
            return <AlbumItem key={id} 
                        id={id}
                        img={img} 
                        artistName={artistName}
                        albumName={albumName}
                        releaseDate={releaseDate}
                        price={price} />
        });
    }

    render(){
        const { data } = this.props;
        return (
            <div className='albumList'>
               {data ? this.renderItem(data) : <Spinner/>}
            </div>
        );
    }
}