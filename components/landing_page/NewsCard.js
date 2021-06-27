import React, { Component } from 'react'
import { Card } from 'antd';
import {Link} from 'react-router-dom'

const { Meta } = Card;

const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
class NewsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {}
        
        //{months[this.props.date.getMonth() + 1]} {this.props.date.getDate()}, { this.props.date.getFullYear()}
    }
    render() { 
        return (
            <Link to={this.props.url} style={{textDecoration:"none"}}>
                <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />}
          >
            <Meta title={this.props.des} description={this.props.date} />
          </Card>
            </Link>
         );
    }
}
 
export default NewsCard;