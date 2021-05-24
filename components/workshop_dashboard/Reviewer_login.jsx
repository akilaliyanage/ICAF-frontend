import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/reviewerlogin.css'

class Reviewer_login extends Component {
    render() {
        return (
            <div className="nt-r-login">
                <div className="nt-log-card">

                    <div className="nt-login">
                        <h1>I C A F</h1>
                        <p className="nt-log-head">REVIEWER LOGIN</p>    
                    </div>    
                
                    <div className="nt-log-form">
                        <div className="nt-formitem">
                            {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                            <input type="text" className="nt-input" placeholder="User Name"/>
                        </div>
                        <div className="nt-formitem">
                            {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                            <input type="password" className="nt-input" placeholder="Password"/>
                        </div>
                        <div className="nt-formitem">
                            <button className="nl-form-btn">Login</button>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Reviewer_login
