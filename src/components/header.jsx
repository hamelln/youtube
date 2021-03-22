import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="masthead-container">
                <div className="ytd-container">Youtube</div>
                <div className="search-container">
                    <div className="yt-searchbox">
                        <input id="search" type="text" placeholder="검색"/>
                    </div>
                    <button id="search-icon-legacy.ytd-searchbox">
                    <yt-icon className="search-icon">icon-svg</yt-icon>
                    </button>
                </div>
            </div>
        );
    }
}

export default Header;