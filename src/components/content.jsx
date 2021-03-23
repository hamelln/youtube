import React, { Component } from 'react';

class Content extends Component {
    render() {
        const { name, img, desc, link} = this.props.content;
        return (
            <li className="content-container">
            <a href={link} className="project" target="blank">
                <img src={img} alt="github" className="content__thumb"/>
                <div className="content__description">
                    <h3>{name}</h3>
                    <span>{desc}</span>
                </div>
            </a>
            </li>
        );
    }
}

export default Content;