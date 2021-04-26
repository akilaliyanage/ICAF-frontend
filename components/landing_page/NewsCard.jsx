import React, { Component } from 'react'
class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="akila-news-card">
                <h1>Dec 09, 2021</h1>
                <p>Test Description about the event</p>
                <a href="" className="btn fourth">Show more</a>
            </div>
         );
    }
}
 
export default NewsCard;