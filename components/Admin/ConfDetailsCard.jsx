import React from "react";
import '../../assets/css/admin/admin.css'

function ConfDetails(){



    return(

        <div className="uditha-card uditha-conf-detail-card-align">
            <div className="uditha-current-conf-detail">

                <h3> Event Registrations</h3>
                <br/>
                <div className="uditha-workshop-stat-card">
                <h4 className="uditha-workshop-stat-align">Workshops</h4>
                </div>

                <div className="uditha-workshop-allowed">
                    <b>Allowed: 08</b>
                </div>
                <div className="uditha-workshop-status">
                    <b>Status: Closed</b>
                </div>


                <div className="uditha-research-stat-card">
                <h4 className="uditha-research-stat-align">Research presentations</h4>
                </div>

                <div className="uditha-research-allowed" style={{display:"inline-block"}}>
                    <b>Allowed: 12</b>
                </div>
                <div className="uditha-research-status">
                    <b>Status: Open</b>
                </div>


            </div>
        </div>

    )
}

export default ConfDetails;