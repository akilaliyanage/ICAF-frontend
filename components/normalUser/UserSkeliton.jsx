import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Image } from 'antd';
import { Row, Col } from 'antd';
import { Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';


const { Header, Content, Footer } = Layout;

class UserKeliton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <Layout className="layout user-login" style={{ height: '100vh', backgroundColor:"white" }}>
                <Content style={{ padding: '0 50px' }}>
                    <div className="site-layout-content" >
                        <Row>
                            <Col span={8}></Col>
                            <Col span={8}>
                                <Image
                                    width={"80%"}
                                    preview={false}
                                    src="https://sliit-af-images.s3.amazonaws.com/images/IC+F.png"
                                />
                                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                                <br />
                                <br />
                                <Input size="large" placeholder="large size" prefix={<UserOutlined />} />
                            </Col>
                            <Col span={8}></Col>
                        </Row>
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>ICAF ©{new Date().getFullYear()}</Footer>
            </Layout>
         );
    }
}
 
export default UserKeliton;