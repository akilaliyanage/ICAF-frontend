import React, { Component } from 'react';
import { AiFillCheckCircle } from "react-icons/ai";


class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="akila-adddet">
                 <h1>Importatnt <span>Dates & extra</span></h1>
               <div>
                <div className="container">
                            <div>
                               <p>Register for a workshop</p>
                            </div>
                            <div>{this.state.hours} H</div>  
                            <div>{this.state.minutes} M</div>
                            <div>{this.state.seconds} S</div>
                        </div>
               </div>
            </div>
         );
    }
}
 
export default AddDetails;