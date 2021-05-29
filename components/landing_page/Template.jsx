import React, { Component } from 'react'
import NavBar from './NavBar'
import MainTopic from './MainTopic'
import About from './About'
import LatestNews from '../landing_page/LatestNews'
import KeynoteTemplate from './KeynoteTemplate'
import config from '../../config.json'
import MoreKeynote from './MoreKeynote'
import Tracks from './Tracks'
import AddDetails from './AddDetails'
import Footer from './Footer'

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        //calling the api to fetch data
        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({navbar_items:data})
        })
    }
    render() { 
        return (
            <div className="akila-main-1">
                <div className='akila-template-header'>
                    <NavBar items={this.state.navbar_items}/>
                </div>

                <div className="akila-main-topic">
                    <MainTopic/>
                </div>

                <div className="akila-about-icaf">
                    <About/>
                </div>

                <div className="akila-latest-news">
                    <LatestNews/>
                </div>

                <dir className="akila-keynote-speakers">
                    <KeynoteTemplate/>
                </dir>
                <dir className="akila-keynote-morekeynote">
                    <MoreKeynote/>
                </dir>
                <dir className="akila-keynote-speakers">
                    <Tracks/>
                </dir>
                <dir className="akila-keynote-morekeynote">
                    <AddDetails/>
                </dir>
                <dir className="akila-footer">
                    <Footer/>
                </dir>
            </div>
        );
    }
}
 
export default Template;