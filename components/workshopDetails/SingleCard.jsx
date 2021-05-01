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
                            <img src={this.props.url} alt="" />
                        </div>
                        <div className="nethsara-card-text">
                            <h1>hello this is a card</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Incidunt tempore architecto saepe consectetur, alias 
                                delectus assumenda. Delectus quae, vero debitis 
                                voluptatibus cupiditate ipsa non doloribus natus voluptatum obcaecati hic itaque!</p>
                        </div>
                    </div>
            </div>
        );
    }
}

export default SingleCard;