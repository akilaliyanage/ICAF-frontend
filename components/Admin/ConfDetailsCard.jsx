import React, {useState} from "react";
import '../../assets/css/admin/admin.css'
import EventStatus from "./EventStatusContent/EventStatus";
import EventLimitUpdate from "./EventManageContent/EventLimitUpdate";

function ConfDetails(){


    const [visible,setVisible] = useState("none");

    const makeVisible = () => {
        setVisible("")
    }


    return(

        <div className="uditha-card uditha-conf-detail-card-align">
            <div className="event-edit-button">
                <img onClick={makeVisible}
                     src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699302-icon-32-clipboard-edit-512.png" width="25" height="25"/>
            </div>
            <div style={{display:visible}}>
            <EventLimitUpdate/>
            </div>
            <div className="uditha-current-conf-detail">

                <h3> Event Registrations</h3>
                <br/>

                <EventStatus/>


            </div>
        </div>

    )
}

export default ConfDetails;