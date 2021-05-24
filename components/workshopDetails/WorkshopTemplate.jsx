import React, { Component } from 'react'
import Workshopcards from './WorkshopCards.jsx'
import NavBar from './../landing_page/NavBar'
import config from '../../config.json'
import './../../assets/css/WorkshopDetails/workshopDetails.css'

class WorkshopTemplate extends Component {

    constructor(props) {
        super(props);
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
            <div>
                <NavBar items={this.state.navbar_items}/>
                <Workshopcards/>
            </div>
        )
    }
}
export default WorkshopTemplate;