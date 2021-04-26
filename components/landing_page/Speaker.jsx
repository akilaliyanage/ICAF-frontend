import React, { Component } from 'react'
class Speaker extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="akila-speaker">
               <img src="https://researchportal.port.ac.uk/portal/files/26435561/16245598.jpg" alt=""/>
                <div className="overlay">
                    akila
               </div>
            </div>
         );
    }
}
 
export default Speaker;