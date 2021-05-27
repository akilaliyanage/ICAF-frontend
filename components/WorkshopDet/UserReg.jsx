import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
class UserReg extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
            role: 'attendee',
            Cnum : '',
         }
    }
   
    render() { 

        return ( 
            <div className="akila-user" style={{overflow:'hidden'}}>
                <div class="container">
                    <div>
                    <div className="img">
                            <div style={{backgroundColor:'rgb(23, 24, 26, 0.3)'}}>
                                <NavBar items={this.state.navbar_items}/>
                            </div>

                            <div style={{position:'relative', bottom:'0',backgroundColor:'rgb(0, 0, 0, 0.5',width:'auto'}}>
                                   <p>"Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world, stimulating progress, giving birth to evolution."</p>
                                   <p><b>— Albert Einstein</b> </p>
                            </div>
                        </div>
                    </div>
                    <div className="login-form">
                        <div className="login" style={{width:'600px',margin:'0 auto',marginTop:'50px',borderRadius:'10px',height:'90vh'}}>
                            <p><b>Attendee Registration Form</b></p>
                               <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                               <div className="overlay">dsdsdsd</div>
                               <input type="text" name="" id="" placeholder="Username"/>
                               <input type="text" name="" id="" placeholder="Enter new password"/>
                               <input type="text" placeholder="Re-enter the password"/>
                               <input type="text" placeholder="E-mail address"/>
                               <button>Sign Up</button>
                        </div>
  
                    </div> 
                     
                </div>
            </div>
        );
    }
}
 
export default UserReg;