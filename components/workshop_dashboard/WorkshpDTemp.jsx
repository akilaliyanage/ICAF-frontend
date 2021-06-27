import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workshopDash.css'
// import UserImg from './../../assets/media/nethsara/workshopUser.png'
import CardDiv from './WorkDashHome'
import ApprovedWorkshops from './ApprovedWorkshops'
import PendingWorkshops from './PendingWorkshops'
import AllCoordiantors from './AllCoordinators'

class WorkshpDTemp extends Component {
    render() {
        return (
            <div className="nt-dashboard">
                <div className="nt-sidenav" style={{color:"white"}}>
                    <div className="nt-sideHead">
                        <h1 style={{color:"white"}}>I C A F</h1>
                    </div>
                    <div className="nt-profile">
                        {/* <img src={userImg} alt="user image" /> */}
                        <p className="nt-prof-name">Name goes here</p>
                    </div>
                    <div className="nt-sav-links">
                        <a>Stats</a>
                        <a>Pending Approvals</a>
                        <a>Approved Workshops</a>
                        <a>All Coordinators</a>
                    </div>
                </div>
                
                <div class="nt-main">

                    <div class="nt-navbar">
                        
                        <p className="nt-head-name">Reviewer Dashboard</p>

                        <a href="#home">Log out</a>
                    </div>

                    <div className="nt-main-cont">

                        <CardDiv/>
                        <PendingWorkshops/>
                        <ApprovedWorkshops/>
                        <AllCoordiantors/>
                    
                    </div>

                </div>
            </div>
        )
    }
}

export default WorkshpDTemp
