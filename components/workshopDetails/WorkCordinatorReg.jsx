import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workReg.css'

class WorkCordinatorReg extends Component {
    render() {
        return (
            <div className="nt-r-login" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>
                <div className="nt-log-card" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>

                    <div className="nt-login">
                        <h1>I C A F</h1>
                        <p className="nt-log-head">REVIEWER LOGIN</p>    
                    </div>    
                
                    <form>
                        <div className="nt-log-form">
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="username" className="nt-input" placeholder="User Name" onChange={this.handleInput}/>
                            </div>
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="password" className="nt-input" placeholder="Password" onChange={this.handleInput}/>
                            </div>
                            <div className="nt-formitem">
                                <button className="nl-form-btn" type="submit">Login</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

export default WorkCordinatorReg
