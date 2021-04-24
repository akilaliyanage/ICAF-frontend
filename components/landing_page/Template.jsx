import React, { Component } from 'react'
import NavBar from './NavBar'

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div className='akila-template-header'>
                    <NavBar/>
                </div>
            </div>
        );
    }
}
 
export default Template;