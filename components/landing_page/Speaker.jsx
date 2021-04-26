import React, { Component } from 'react'
class Speaker extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div className="akila-speaker">
               <img src={this.props.url} alt=""/>
                <div className="overlay">
                    <p>Prof. Nobody</p>
                    <p>SLIIT, Sri Lanka</p>
               </div>
            </div>
         );
    }
}
 
export default Speaker;