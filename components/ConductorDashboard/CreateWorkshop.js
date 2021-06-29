import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'
import './../../assets/css/WorkshopDetails/fileupload.css'

import config from '../../config.json'

class CreateWorkshop extends Component {

    constructor(props){
        super(props);
        this.state = {
            workshopTitle:"",
            eventDate:"",
            description:"",
            conductor:"",
            file:"",
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
            description: this.state.description

            // title : "_test_ title",
            // eventDate: "22/06/2021",
            // conductor : this.state.loginID,
            // desciption: "testing 1234567809ghjfdb"
        }
        console.log(data)

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

                        <h2 style={{marginTop:"3%", color:"black"}}>Create a Workshop</h2> 

                        <form action="" method="POST" style={{marginLeft:"10%"}}>
                            <table style={{width:"80%", marginTop:"4%"}}>
                                <tbody>
                                    <tr>
                                        <td>
                                            Workshop Title :
                                        </td>
                                        <td>
                                            <input type="text" name="workshopTitle" className="nt-cw-input" 
                                            value={this.state.workshopTitle} 
                                            onChange={this.handleChange}/>
                                            
                                        </td>
                                    </tr>
                                    <br />
                                    <tr >
                                        <td>
                                            Workshop date :
                                        </td>
                                        <td>
                                            <input type="date" name="eventDate" className="nt-cw-input" 
                                            placeholder="" value={this.state.eventDate} 
                                            onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <br />
                                    <tr >
                                        <td>
                                            Workshop Description :
                                        </td>
                                        <td>
                                            <textarea type="text" style={{border: "2px solid #000000dc;"}} name="description" 
                                            className="nt-cw-input" 
                                            placeholder="" value={this.state.description} 
                                            onChange={this.handleChange}/>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Workshop Resources :
                                        </td>
                                        <td>
                                            {/* <div class="file-upload">
                                                <div class="image-upload-wrap">
                                                    <input class="file-upload-input" type='file' onchange={this.readURL} value={this.state.eventDate} accept=".pdf, .doc, .docx, .zip" multiple/>
                                                    <div class="drag-text">
                                                        <h3 class="d-h3">Drag and drop or Click here to add</h3>
                                                    </div>
                                                </div>
                                                <div class="file-upload-content">
                                                    <img class="file-upload-image" src="#" alt="your image" />
                                                    <div class="image-title-wrap">
                                                        <button type="button" onclick={this.removeUpload} class="remove-image">Remove <span class="image-title">Uploaded Image</span></button>
                                                    </div>
                                                </div>
                                                <button class="file-upload-btn" type="button" onclick="$('.file-upload-input').trigger( 'click' )">Add Resources</button>
                                            </div> */}
                                            <input className="w-file-upload" type='file' 
                                            accept=".pdf, .doc, .docx, .zip" multiple/>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <button type="submit" className="nl-sign-form-btn" style={{width:"50%"}} 
                            onClick={this.handleSubmit}>Create Workshop</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default CreateWorkshop
