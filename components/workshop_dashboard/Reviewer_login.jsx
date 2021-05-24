import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/reviewerlogin.css'

class Reviewer_login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:""
        }
        this.handleInput = this.handleInput.bind(this)
        this.OnSubmit = this.OnSubmit.bind(this)
    }

    // handleInput = (e) => {
    //     this.setState({[e.target.name]:e.target.value});
    // }

    render() {
        return (
            <div className="nt-r-login">
                <div className="nt-log-card">

                    <div className="nt-login">
                        <h1>I C A F</h1>
                        <p className="nt-log-head">REVIEWER LOGIN</p>    
                    </div>    
                
                <form onSubmit={this.OnSubmit.bind(this)}>

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

export default Reviewer_login
