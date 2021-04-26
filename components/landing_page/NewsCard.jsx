import React, { Component } from 'react'

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
        //{months[this.props.date.getMonth() + 1]} {this.props.date.getDate()}, { this.props.date.getFullYear()}
    }
    render() { 
        return (
            <div className="akila-news-card">
                <h1>{months[this.props.date.getMonth()]} {this.props.date.getDate()}, { this.props.date.getFullYear()}</h1>
                <p>{ this.props.des}</p>
                <a href={this.props.url} className="btn fourth">Show more</a>
            </div>
         );
    }
}
 
export default NewsCard;