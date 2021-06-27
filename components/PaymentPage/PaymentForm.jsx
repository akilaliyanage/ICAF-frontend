import React, { Component } from 'react';
import config from '../../config.json'
class PaymentForm extends Component {
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
            background: '#301b3f',
            color:'white'
        };

        const back2 = {
            background: 'white',
            color : 'black'
        };

        return ( 
            <div className="payment">
            <div style={{width:'600px',margin:'0 auto'}}>
            <h1>Lets finish setting you up..</h1>
            <div className="center">
                <p>Please select your user role before proceeding to the payment</p>
                <br />
                <div className="row">
                    <div className="col p-3" onClick = {() => this.role('attendee')} style={this.state.role == 'attendee' ? back : back2}> <b>Attendee</b> </div>
                    <div className="col p-3" onClick = {() => this.role('reser')} style={this.state.role == 'reser' ? back : back2}> <b>Research paper presenter</b> </div>
                </div>

                <div className="pay-info">
                    <hr />

                <div className="akila-container">
                    <div>Your bill value is</div>
                    <div>Rs 1000.00</div>
                </div>
                <hr />

                <input type="text" name="cardName" id="" />
                <label htmlFor="CardName">Name on the card</label>

                <input type="text" value={this.state.Cnum} name="cardName" id="" onChange={this.addHyphen}/>
                <label htmlFor="CardName">Card number</label>

               <div className="dates" style={{width: '100%'}}>
               <div className="akila-container">
                    <div>
                        <div className="akila-container" >
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

                <button><b>PAY</b></button>




                </div>
            </div>
            </div>
            
        </div>  
         );
    }
}
 
export default PaymentForm;