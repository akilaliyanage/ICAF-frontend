import { Col, Row } from 'antd';
import React, { Component } from 'react';
import { Typography, Divider, Image } from 'antd';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineSlack, FacebookOutlined } from "react-icons/ai";

const { Title, Paragraph, Text, Link } = Typography;


class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Row className="akila-footer">
                <Col span={4} style={{margin:'20px', color:'white'}}>
                    <Image
                    width={200}
                    src="https://sliit-af-images.s3.amazonaws.com/images/IC+F.png"
                    preview={false}
                    />
                    
                </Col>

                <Col span={7}>
                    <Typography>
                        <Title style={{color : 'white'}}>About</Title>
                        <Paragraph style={{color : 'white'}}>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                        </Paragraph>

                        <Title style={{color : 'white'}} level={3}>Connect with us</Title>

                        <Row>
                            <Col span={2}>
                                <AiFillFacebook  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                            <Col span={2}>
                                <AiFillTwitterSquare  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                            <Col span={2}>
                                <AiOutlineInstagram  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                        </Row>
                        </Typography>
                </Col>

                <Col span={7}>
                <Typography>
                        <Title style={{color : 'white'}}>Usefull Links</Title>
                        <Paragraph style={{color : 'white'}}>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                        </Paragraph>

                        <Title style={{color : 'white'}} level={3}>Connect with us</Title>

                        <Row>
                            <Col span={2}>
                                <AiFillFacebook  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                            <Col span={2}>
                                <AiFillTwitterSquare  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                            <Col span={2}>
                                <AiOutlineInstagram  style={{color : 'white', fontSize:'2rem'}}/>
                            </Col>
                        </Row>
                        </Typography>
                </Col>
            </Row>
         );
    }
}
 
export default Footer;