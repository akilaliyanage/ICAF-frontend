import React, { Component } from 'react';
class Tracks extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="akila-tracks">
                <div class="flex-container">
                    <div className="topics">
                        <h1>Conference</h1>
                        <h2>Tracks</h2>
                    </div>
                    <div className="info">
                    <div className="container">
                        <div>
                            <h5>Application Frameworks</h5>
                            <div className="row">
                               
                            </div>
                        </div> 
                    </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Tracks;