import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import config from '../../config.json'

class PayTemplate extends Component {
    constructor(props) {
        super(props);
        this.role = this.role.bind(this)
        this.addHyphen = this.addHyphen.bind(this);
        this.state = { 
            navbar_items : [],
            role: 'attendee',
            Cnum : '',
         }
    }

    componentDidMount(){

        // //calling the api to fetch data
        // fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
        //     console.log(data)
        //     this.setState({navbar_items:data})
        // })
    }

    role(val){
        if(val == 'attendee'){
            this.setState({role : 'attendee'})
        }else if(val == 'reser'){
            this.setState({role : 'reser'})
        }
    }

    addHyphen(ele) {
        console.log(ele.target.value)
        ele = ele.target.value.split('-').join('');    // Remove dash (-) if mistakenly entered.

        let finalVal = ele.match(/.{1,4}/g).join('-');
        console.log(finalVal)
        this.setState({Cnum : finalVal})
        //document.getElementById(element.id).value = finalVal;
    }

    render() { 

        const back = {
            background: '#301b3f'
        };

        const back2 = {
            background: 'white',
            color : 'black'
        };

        return ( 
            <div className="akila-payment">
                <div className="container">
                        <div className="img">
                            <div style={{backgroundColor:'rgb(23, 24, 26, 0.3)'}}>
                                <NavBar items={this.state.navbar_items}/>
                            </div>

                            <div style={{position:'relative', bottom:'0',backgroundColor:'rgb(0, 0, 0, 0.5',width:'auto'}}>
                                   <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."</p>
                                   <p><b>— Albert Einstein</b> </p>
                            </div>
                        </div>
                        <div className="payment">
                            <div style={{width:'600px',margin:'0 auto'}}>
                            <h1>Lets finish setting you up..</h1>
                            <div className=".center">
                                <p>Please select your user role before proceeding to the payment</p>
                                <br />
                                <div className="container">
                                    <div onClick = {() => this.role('attendee')} style={this.state.role == 'attendee' ? back : back2}> <b>Attendee</b> </div>
                                    <div onClick = {() => this.role('reser')} style={this.state.role == 'reser' ? back : back2}> <b>Research paper presenter</b> </div>
                                </div>

                                <div className="pay-info">
                                    <hr />

                                <div className="container">
                                    <div>Your bill value is</div>
                                    <div>Rs 1000.00</div>
                                </div>
                                <hr />

                                <input type="text" name="cardName" id="" />
                                <label htmlFor="CardName">Name on the card</label>

                                <input type="text" value={this.state.Cnum} name="cardName" id="" onChange={this.addHyphen}/>
                                <label htmlFor="CardName">Card number</label>

                               <div className="dates" style={{width: '100%'}}>
                               <div className="container">
                                    <div>
                                        <div className="container" >
                                        <input type="text" name="cardName" id="" placeholder="MM"/>
                                        <input type="text" name="cardName" id="" placeholder="YY"/>
                                            
                                        </div>

                                    </div>
                                    <div>
                                        <input type="text" name="cardName" id="" />
                                        <label htmlFor="CardName">CVV</label>
                                    </div>
                                </div>
                               </div>

                               <input type="text" value={this.state.Cnum} name="country" id="" placeholder="EX: LK/70100" onChange={this.addHyphen}/>
                                <label htmlFor="CardName">Country/ZIP code</label>

                                <button>PAY</button>




                                </div>
                            </div>
                            </div>
                            
                        </div>  
                    </div>
            </div>
         );
    }
}
 
export default PayTemplate;