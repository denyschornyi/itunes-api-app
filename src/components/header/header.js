import React, { Component } from 'react';

import './header.css';

export default class Header extends Component{
    render() {
        return (
            <form className="search">
                <input type="text" className="search__input" placeholder="Find an album"/>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="19" className="search__icon">
                    <g fill="none" fill-rule="evenodd" stroke="#1E375A" stroke-width="2" transform="translate(0 1)">
                     <circle cx="11.1066017" cy="7" r="7"></circle>
                     <path stroke-linecap="round" d="M6.035534 12.07106778l-5.03553394 4.92893223"></path>
                    </g>
                </svg>
            </form>
        )     
    };
}