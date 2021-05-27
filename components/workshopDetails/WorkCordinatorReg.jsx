import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/workReg.css'

class WorkCordinatorReg extends Component {

    constructor(props){
        this.state = {
            name:"",
            studyField:"",
            email:"",
            password:"",
            confPassword:"",
            regErros:""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit(event){
        console.log("Form submit")
        event.preventDefault();
    }

    handleInput(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }


    render() {
        return (
            <div className="nt-r-login" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>
                <div className="nt-log-card" style={{ backgroundImage: `url(http://ig.com.my/wp-content/uploads/2017/11/profile-background.jpg)` }}>

                    <div className="nt-login">
                        <h1>I C A F</h1>
                        <p className="nt-log-head">REVIEWER LOGIN</p>    
                    </div>    
                
                    <form onSubmit={this.handleSubmit}>
                        <div className="nt-log-form">
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="name" className="nt-input" placeholder="Your Name" value={this.state.name} onChange={this.handleInput} required/>
                            </div>
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="text" name="studyField" className="nt-input" placeholder="your Feild of study" value={this.state.studyField} onChange={this.handleInput} required/>
                            </div>
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="email" name="email" className="nt-input" placeholder="your email" value={this.state.email} onChange={this.handleInput} required/>
                            </div>
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="password" className="nt-input" placeholder="Your Password" value={this.state.password} onChange={this.handleInput} required/>
                            </div>
                            <div className="nt-formitem">
                                {/* <label className="nt-lable" htmlFor="">User Name</label><br /> */}
                                <input type="password" name="confPassword" className="nt-input" placeholder="Confirm Password" value={this.state.confPassword} onChange={this.handleInput} required/>
                            </div>
                            <div className="nt-formitem">
                                <button className="nl-form-btn" type="submit">SIGN UP</button>
                            </div>
                        </div>
                    </form>
                    
                </div>
                
            </div>
        )
    }
}

export default WorkCordinatorReg
