import React from "react";
import '../../assets/css/admin/admin.css'

function UpperCard(){



    return(

        <div>
        <div className="uditha-small-card workshopcard-align">

            <div className="smallcard-text-align">
                <h3>Workshops</h3>
                <br/>
                <h2>08</h2>
            </div>
        </div>

            <div className="uditha-small-card research-align">

            <div className="smallcard-text-align">
                <h3>Research</h3>
                <br/>
                <h2>09</h2>
            </div>

                </div>


                <div className="uditha-small-card participation-align">

            <div className="smallcard-text-align">
                <h3>Participation</h3>
                <br/>
                <h2>78</h2>
            </div>

                    </div>

            <div className="uditha-small-card other-align">

                <div className="smallcard-text-align">
                    <h3>other</h3>
                    <br/>
                    <h2>????</h2>
                </div>

            </div>




        </div>

    )
}

export default UpperCard;