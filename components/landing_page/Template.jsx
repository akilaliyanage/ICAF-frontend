import React, { Component } from 'react'
import NavBar from './NavBar'
import config from '../../config.json'

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        // the item array should have array ob obkects as per lister in the below example before passing as props to the nav Bar
        // {
        //     "name" : "item 1",
        //     "url" : "test url"
        // }

        //calling the api to fetch data
        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({navbar_items:data})
        })
    }
    render() { 
        return (
            <div>
                <div className='akila-template-header'>
                    <NavBar items={this.state.navbar_items}/>
                </div>

                
            </div>
        );
    }
}
 
export default Template;