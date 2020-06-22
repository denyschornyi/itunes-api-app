import React, { Component } from 'react';
// import LazyLoad from 'react-lazyload';

import './item.css';


export default class Item extends Component{
    render(){

        const {link, image, title, price} = this.props;
        
        return(
            
            <div className="album">

                <div className="album-item">
                    <a href={link} target="blank" className="link">
                        <div height={200} >
                            <img className="album-img" src={image} alt={'itunes' + Math.random()} />
                        </div>
                    </a>
                </div>

                <div className="title album-item">
                    <a href={link} target="blank" className="link">
                        {title.slice(0, 20)}..</a></div>
                <div className="price album-item">Price:{price}</div>

             </div>
        )
    }
}