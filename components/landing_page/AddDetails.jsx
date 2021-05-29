import React, { Component } from 'react';
import { AiFillCheckSquare, AiOutlineDollarCircle, AiOutlineUserAdd } from "react-icons/ai";


class AddDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="akila-adddet">
               <div>
                <div className="container">
                            <div>
                              <p> <span><AiFillCheckSquare/></span> Register for a workshop</p>
                            </div>
                            <div>
                              <p> <span><AiOutlineDollarCircle/></span> Payments</p>
                            </div>  
                            <div>
                              <p> <span><AiOutlineUserAdd/></span> Attendee registration</p>
                            </div> 
                        </div>
               </div>
            </div>
         );
    }
}
 
export default AddDetails;