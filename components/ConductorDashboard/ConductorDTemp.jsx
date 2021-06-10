import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
// import UserImg from './../../assets/media/nethsara/workshopUser.png'
import CreateWorkshop from './CreateWorkshop'


class ConductorDTemp extends Component {

    constructor(props){
        super(props)
        this.state = {
            loginID:localStorage.getItem('wc-id')
        }
    }

    render() {
        return (
            <div className="nt-dashboard">
                <div className="nt-sidenav" style={{color:"white"}}>
                    <div className="nt-sideHead">
                        <h1>I C A F</h1>
                    </div>
                    <div className="nt-profile">
                        {/* <img src={userImg} alt="user image" /> */}
                        <p className="nt-prof-name">Name goes here</p>
                    </div>
                    <div className="nt-sav-links">
                        <a>My Workshops</a>
                        <a>Create a Workshop</a>
                    </div>
                </div>
                
                <div class="nt-main">

                    <div class="nt-navbar">
                        
                        <p className="nt-head-name">Workshop Coordinator Dashboard</p>

                        <a href="#home">Log out</a>
                    </div>

                    <div className="nt-main-cont">

                        <CreateWorkshop/>

                        
                    </div>

                </div>
            </div>
        )
    }
}

export default ConductorDTemp
