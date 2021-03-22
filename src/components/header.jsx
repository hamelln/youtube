import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="masthead-container">
                <div className="ytd-container">
                <img id="logo" src={process.env.PUBLIC_URL + '/images/logo.png'} /> 
                Youtube
                </div>
                <div className="search-container">
                    <div className="yt-searchbox">
                        <input id="search" type="text" placeholder="검색"/>
                    </div>
                    <button id="search-icon-legacy.ytd-searchbox">
                    <img id="search" src={process.env.PUBLIC_URL + '/images/search.png'} /> 
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;