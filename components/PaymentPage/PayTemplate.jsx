import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import config from '../../config.json'

class PayTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        // //calling the api to fetch data
        // fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
        //     console.log(data)
        //     this.setState({navbar_items:data})
        // })
    }

    render() { 
        return ( 
            <div className="akila-payment">
                <div class="container">
                        <div className="img">
                            <div style={{backgroundColor:'rgb(23, 24, 26, 0.3)'}}>
                                <NavBar items={this.state.navbar_items}/>
                            </div>

                            <div style={{position:'absolute', bottom:'0',backgroundColor:'rgb(0, 0, 0, 0.5',width:'600px'}}>
                                   <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."</p>
                                   <p><b>— Albert Einstein</b> </p>
                            </div>
                        </div>
                        <div className="payment">
                            <div>
                            <h1>Lets finish setting you up..</h1>
                            <div className=".center">
                                <p>Please select your user role before proceeding to the payment</p>
                                <ul>
                                    <li>
                                        <div>
                                            <p>Attendee</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div>
                                            <p>Research paper presenter</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            </div>
                        </div>  
                    </div>
            </div>
         );
    }
}
 
export default PayTemplate;