import React, { Component } from 'react';
import Content from './content';

class Contents extends Component {
    render() {
        return (
            <div className="contents">
                <section id="contents_list" className="section">
                    <h2>test</h2>
                    {this.props.contents.map(content => (
                        <Content
                        key = {content.id}
                        content = {content}
                        />
                    ))}
                    </section>
            </div>
        );
    }
}

export default Contents;