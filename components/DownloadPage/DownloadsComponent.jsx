import React, { Component } from 'react'
import NavBar from './../landing_page/NavBar'
import config from '../../config.json'
import '../../assets/css/Downloads_Page/Downloads.css'

export default class DownloadsComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            navbar_items : [],
        }
    }

    componentDidMount(){

        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({navbar_items:data})
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="common-download-nav-cover">
                    <NavBar items={this.state.navbar_items}/>
                </div>
            </React.Fragment>
        )
    }
}
