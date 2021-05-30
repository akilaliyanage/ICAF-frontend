import React from "react";
import '../../assets/css/admin/admin.css'
import MainCardTitle from "./MainCardContent/Title";
import MainCardDate from "./MainCardContent/Date";

function Reviewers(){



    return(

        <div className="uditha-main-card uditha-main-card-align">
            <div className="uditha-edit-content">


           <MainCardTitle/>
                <br/>
           <MainCardDate/>

                <br/>

                <h2>@</h2>
                <h1>SLIIT</h1>
                <br/>
                <button onClick={e =>  window.location.href='/approve-content'} className="uditha-notify-button blink">Updates are Pending</button>

            </div>

        </div>

    )
}

export default Reviewers;