import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Avatar, Card, Input, Form , DatePicker, Button, message} from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Descriptions, Badge } from 'antd';
import {Link} from 'react-router-dom'
import config from '../../config.json'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import ResearchCard from './ResearchCard'
import PresentationAddModel from './PresentationAddModel'

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export default class DashboardHome extends Component {

    constructor(props){
        super(props)
        this.state = {
            presentationmodelOpen : false,
        }
        this.toggleModel = this.toggleModel.bind(this)
    }

    toggleModel(){
        this.setState({presentationmodelOpen : !presentationmodelOpen})
    }

    render() {
        return (
            <Layout>
                <Header className="header">
                    {/* <div className="logo" /> */}
                    <div className="row d-flex justify-content-between align-items-center">
                        <h3 className="mt-3 text-light" style={{color:'white'}}>ICAF - Researcher Dashboard</h3>
                        <h3 className="mt-1 text-light" style={{color:'white' , padding:10}}>Welcome Again ! - Researcher</h3>
                    </div>
                </Header>
                <Layout>
                    <Sider className="site-layout-background" width={300}>
                        <Menu mode="inline" defaultSelectedKeys={['1']} defaultOpenKeys={['sub1']} style={{ height: '100%' }} >
                            <SubMenu key="sub1" icon={<UserOutlined />} title="Researcher">
                                <Menu.Item key="1"> <Link to="/edi-admin">My Research Papers</Link></Menu.Item>
                                <Menu.Item key="2"> <Link to="/edi-admin/date">Notifications</Link></Menu.Item>
                                <Menu.Item key="3"> <Link to="/edi-admin/about">Create Research Paper</Link></Menu.Item>
                                <Menu.Item key="4"> <Link to="/edi-admin/news">Event News</Link></Menu.Item>
                                <Menu.Item key="5"> <Link to="/edi-admin/keynote">Keynote Speakers</Link></Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{ padding: '0 24px', minHeight: 280 }}>
                        <Paper className="paper-bounderies mt-3 p-4 bg-primary">
                            <div className='row text-center'>
                                <h1>My Research Papers</h1>
                            </div>
                        </Paper>
                        <Paper className="paper-bounderies mt-3 p-4">
                            <div className='row text-center'>
                                <ResearchCard/>
                            </div>
                        </Paper>
                    </Content>
                    
                    <PresentationAddModel opened={this.state.presentationmodelOpen} toggleModel={this.toggleModel}/>
                </Layout>    
            </Layout>
        )
    }
}
