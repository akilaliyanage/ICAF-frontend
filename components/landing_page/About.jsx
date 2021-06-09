import React, { Component } from 'react'
import config from '../../config.json'

class About  extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            des : '',
            topic : ''
         }
    }

    componentDidMount(){

        this.fetchTopic()

        fetch(config.host + "/about").then(res => res.json()).then(data =>{
            console.log(data[0]["des"])
            this.setState({des : data[0]["des"]})
        }).catch(err =>{
            alert(err)
        })
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"]})
        }).catch(err =>{
            alert(err)
        })
    }
    render() { 
        return (
            <div>
                <div className="flex-container">
                    <div>
                        <h1>About</h1>
                        <h2>{this.state.topic}</h2>
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