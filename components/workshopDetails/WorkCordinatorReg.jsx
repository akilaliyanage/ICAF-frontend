import React, { Component } from 'react'
import ReactDOM from "react-dom";
import './../../assets/css/WorkshopDetails/workReg.css'

class WorkCordinatorReg extends Component {

    constructor(props){
        super(props)
        this.state = {
            name:"",
            studyField:"",
            email:"",
            password:"",
            confPassword:"",
            regErros:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        console.log("Form submit")
        event.preventDefault();
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    render() {
        return (
            <div className="nt-r-signin" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>
                <div className="nt-sign-card" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>

                    <div className="nt-signin">
                        <h1>I C A F</h1>
                        <p className="nt-sign-head">Workshop Coordinator | SignUp</p>    
                    </div>    
                
                    <form 
                        onSubmit={this.handleSubmit}
                    >
                        <div className="nt-sign-form">
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="name" className="nt-sign-input" placeholder="Your Name" 
                                    value={this.state.name} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="studyField" className="nt-sign-input" placeholder="Your Feild of study" 
                                    value={this.state.studyField} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="email" className="nt-sign-input" placeholder="Your Email" 
                                    value={this.state.email} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="password" className="nt-sign-input" placeholder="Your Password" 
                                    value={this.state.password} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-sign-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="confPassword" className="nt-sign-input" placeholder="Confirm Password" 
                                    value={this.state.confPassword} onChange={this.handleChange} required
                                />
                            </div>
                            <div className="nt-formitem">
                                <button className="nl-sign-form-btn" type="submit">SIGN UP</button>
                            </div>

                            <p className="nt-warn">You won't be able to create workshops immediately. A reviewer should accept you as a workshop coordinator before.</p>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

export default WorkCordinatorReg
