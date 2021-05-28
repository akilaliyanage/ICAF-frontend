import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
// import UserImg from './../../assets/media/nethsara/workshopUser.png'
import CardDiv from './WorkDashHome'
import AllWorkshops from './AllWorkshops'
import PendingCoordinators from './PendingCoordinators'
import ApprovedCoordiantors from './ApprovedCoordinators'

class WorkshpDTemp extends Component {
    render() {
        return (
            <div className="nt-dashboard">
                <div className="nt-sidenav">
                    <div className="nt-sideHead">
                        <h1>I C A F</h1>
                    </div>
                    <div className="nt-profile">
                        {/* <img src={userImg} alt="user image" /> */}
                        <p className="nt-prof-name">Name goes here</p>
                    </div>
                    <div className="nt-sav-links">
                        <a>Stats</a>
                        <a>Workshops</a>
                        <a>Pending Approvals</a>
                        <a>Approved Users</a>
                    </div>
                </div>
                
                <div class="nt-main">

                    <div class="nt-navbar">
                        
                        <p className="nt-head-name">Reviewer Dashboard</p>

                        <a href="#home">Log out</a>
                    </div>

                    <div className="nt-main-cont">

                        <CardDiv/>
                        <AllWorkshops/>
                        <PendingCoordinators/>
                        <ApprovedCoordiantors/>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default WorkshpDTemp
