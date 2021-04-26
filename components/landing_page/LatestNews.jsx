import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.scss'
import config from '../../config.json'

import NewsCard from './NewsCard'
class LatestNews extends Component {
    constructor(props) {
        super(props);
        this.state = {
            news : [],
         }
    }

    componentDidMount() {
        //fetching the data from the database

        fetch(config.host + "/news/").then(res => res.json()).then(data => {
            this.setState({news:data})
        })
    }
    render() { 
        return (
            <div>
                <h1>Latest <span>News</span></h1>
                <div class="flex-container">
                    {this.state.news.map(item => {
                        return (
                            <div><NewsCard /></div>
                        );
                    })}
                </div>
            </div>
         );
    }
}
 
export default LatestNews;