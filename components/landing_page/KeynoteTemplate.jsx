import { Row, Col } from 'antd';
import React, { Component } from 'react'
import Speaker from './Speaker'

class KeynoteTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <br />
                <div className="flex-container">
                    <div className="topics">
                        <h1>Our</h1>
                        <h2>Keynote</h2>
                        <h1>Speakers</h1>
                    </div>
                    <div className="info">
                        <Row>
                            <Col span={12}>
                            <Speaker  url="http://cdn.differencebetween.net/wp-content/uploads/2018/01/Differences-Between-Teacher-and-Professor-1.jpg"/>
                            </Col>

                            <Col span={12}>
                            <Speaker colored={true} url="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201907/1%2520Patrick%2520Winston%2520at%2520____%2520-%2520photo%2520credit%2520Jason%2520Dorfman%252C%2520MIT%2520CSAIL_0.jpg?itok=r6epNmaH" />
                            </Col>
                        </Row>

                        <Row>
                            <Col span={12}>
                            <Speaker colored={true} url="https://news.mit.edu/sites/default/files/styles/news_article__image_gallery/public/images/201907/1%2520Patrick%2520Winston%2520at%2520____%2520-%2520photo%2520credit%2520Jason%2520Dorfman%252C%2520MIT%2520CSAIL_0.jpg?itok=r6epNmaH" />
                            </Col>

                            <Col span={12}>
                            <Speaker  url="https://media1.s-nbcnews.com/j/newscms/2020_30/3393635/200630-mike-adams-unc-mc-1354_9abcaec4d365b36dd6352627f7d155b2.fit-2000w.jpg"/>
                            </Col>
                        </Row>                       
                    </div>
                    
                </div>
                <br />
            </div>
         );
    }
}
 
export default KeynoteTemplate;