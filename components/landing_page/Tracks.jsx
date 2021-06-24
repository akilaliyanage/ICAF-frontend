import { Card, Col, Row } from 'antd';
import React, { Component } from 'react';
import { Carousel } from 'antd';
import { Avatar } from 'antd';
import { Image } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';

const { Meta } = Card;

const contentStyle = {
    height: '30vh',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="akila-tracks">
                <Row style={{paddingTop:'2%',paddingLeft:'2%'}}>
                    <Col span={15}>
                        <Row>
                            <Col span={8}>
                                 <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    }
                                    actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                    />
                                </Card>
                            </Col>

                            <Col span={8}>
                                 <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    }
                                    actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                    />
                                </Card>
                            </Col>

                            <Col span={8}>
                            <Card
                                    style={{ width: 300 }}
                                    cover={
                                    <img
                                        alt="example"
                                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                                    />
                                    }
                                    actions={[
                                    <SettingOutlined key="setting" />,
                                    <EditOutlined key="edit" />,
                                    <EllipsisOutlined key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                    avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                    title="Card title"
                                    description="This is the description"
                                    />
                                </Card>
                            </Col>
                        </Row>
     
                    </Col>

                    <Col span={9} style={{paddingTop:'2%'}}>
                        <div className="topics">
                            <h1 style={{fontSize:"7rem"}}>Conference</h1>
                            <h2 style={{fontSize:"4rem"}}>Tracks</h2>
                        </div>
                    </Col>
                </Row>
            </div>
         );
    }
}
 
export default Tracks;