import React, { Component } from 'react';
import SingleCard from './SingleCard'

class WorkshopCards extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() {
        return (
            <div class="nethsara-workshopCards">
                <div className="nethsara-card-container">
                    <SingleCard url="https://st.depositphotos.com/1056393/5008/i/600/depositphotos_50088039-stock-photo-speaker-at-business-convention-and.jpg"/>
                </div>
            </div>
        );
    }
}

export default WorkshopCards;