import React, { Component } from 'react';

class SingleCard extends Component {

    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <div> 
                <div className="nethsara-card">
                        <div className="nethsara-card-image">
                            {/* <img src={this.props.url} alt="" /> */}
                            <h3>{this.props.item.title}</h3>
                        </div>
                        <div className="nethsara-card-text">
                            <h3>{this.props.item.consuctor}</h3>
                            <h6>Conducted on : {this.props.item.eventDate}</h6>
                            <p>{this.props.item.description}</p>
                        </div>
                        <div>
                            <button className="nethsara-card-button">
                                View Workshop
                            </button>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SingleCard;