import React, { Component } from 'react'
import config from '../../config.json'

class About  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            des : ''
         }
    }

    componentDidMount(){
        fetch(config.host + "/about").then(res => res.json()).then(data =>{
            console.log(data[0]["des"])
            this.setState({des : data[0]["des"]})
        }).catch(err =>{
            alert(err)
        })
    }

    render() { 
        return (
            <div>
                <div class="flex-container">
                    <div>
                        <h1>About</h1>
                        <h2>ICAF</h2>
                        <h1>Conference</h1>
                    </div>
                    <div className="info">
                        <p>{this.state.des}</p>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default About;