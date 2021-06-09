import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

import config from './../../config.json'

class CreateWorkshop extends Component {

    constructor(props){
        super(props);
        this.state = {
            workshopTitle:"",
            eventDate:"",
            description:"",
            conductor:"",
            loginID:localStorage.getItem('wc-id')
        }
        
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]:event.target.value
        });
        console.log([event.target.name],event.target.value)
    }

    handleSubmit(e){
        
        e.preventDefault();

        const data = {
            title : this.state.workshopTitle,
            eventDate: this.state.eventDate,
            conductor : this.state.loginID,
            desciption: this.state.desciption

            // title : "_test_ title",
            // eventDate: "22/06/2021",
            // conductor : this.state.loginID,
            // desciption: "testing 1234567809ghjfdb"
        }

        // console.log(data)

        fetch(config.local + '/wShop/create',{
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then(res => res.json()).then(data =>{

            alert("Workshop Created Successfully!")
            
        }).catch(err =>{
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        Create a Workshop 

                        <form action="" method="POST">
                        <table style={{width:"80%", marginTop:"4%"}}>
                            <tbody>
                                <tr >
                                    <td>
                                        Workshop Title :
                                    </td>
                                    <td>
                                        <input type="text" name="workshopTitle" className="nt-cw-input" value={this.state.workshopTitle} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <br />
                                <tr >
                                    <td>
                                        Workshop date :
                                    </td>
                                    <td>
                                        <input type="text" name="workshopDate" className="nt-cw-input" placeholder="DD/MM/YYYY" value={this.state.eventDate} onChange={this.handleChange}/>
                                    </td>
                                </tr>
                                <br />
                                <tr >
                                    <td>
                                        Workshop Description :
                                    </td>
                                    <td>
                                        <input type="text" name="workshopTitle" className="nt-cw-input" placeholder="" value={this.state.description} onChange={this.handleChange}/>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                        </form>
                        <button type="submit" className="nl-sign-form-btn" onClick={this.handleSubmit}>Create Workshop</button>

                    </div>
                </div>
                
            </div>
        )
    }
}

export default CreateWorkshop
