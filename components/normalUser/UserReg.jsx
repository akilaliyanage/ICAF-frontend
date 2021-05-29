import React, { Component } from 'react';
import NavBar from '../landing_page/NavBar';
import Noti from './Noti'
import NotiErr from './NotiErr';
import { Redirect } from 'react-router-dom';

import config from '../../config.json'
class UserReg extends Component {
    constructor(props) {
        super(props);
        this.role = this.role.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.timer = this.timer.bind(this)
        this.state = { 
            navbar_items : [],
            role: 'reg',
            Cnum : '',
            hidden : false,
            username : '',
            password : '',
            repass : '',
            email : '',
            noti : false,
            message : '',
            notiErr : false,
            isAuth : false
         }
    }

    role(val){
        if(val == 'reg'){
            this.setState({role : 'reg', hidden : false})
        }else if(val == 'login'){
            this.setState({role : 'login', hidden : true})
        }
    }

    handleChange(e){
        //console.log([e.target.name] , e.target.value)
        this.setState({[e.target.name] : e.target.value})
    }

    timer(){
        setInterval(() =>{ 
            this.setState({notiErr : false})
            this.setState({noti : false})
         }, 3000);
    }

    handleSubmit(){

        if(this.state.role == 'reg'){
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(this.state.password != this.state.repass){
            this.setState({message : 'Password mismatch!!'})
            this.setState({notiErr : true})
            this.setState({password : ''})
            this.setState({repass : ''})
            this.timer()

        }else if(!re.test(String(this.state.email).toLowerCase())){
            this.setState({message : 'Invalid email address!!'})
            this.setState({notiErr : true})
            this.setState({email : ''})
            this.timer()
        }else{


            const data = {
                username : this.state.username,
                password: this.state.password,
                proImg : "bcjcdsc",
                email : this.state.email
            }
    
            fetch(config.host + '/n-user/reg',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.message)

                if(data.message == 'ok'){
                    this.setState({noti : true})
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }

        }else if(this.state.role == 'login'){
            const data = {
                username : this.state.username,
                password : this.state.password
            }

            fetch(config.host + '/n-user/login',{
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json'
                  },
                body : JSON.stringify(data)
            }).then(res => res.json()).then(data =>{
                console.log(data.token)
    
                if(data.token){
                    window.localStorage.setItem('token',data.token)
                    window.localStorage.setItem('id',data.id)
                    window.localStorage.setItem('username',data.username)
                    this.setState({noti : true});

                    setInterval(() => {
                        this.setState({isAuth : true});
                    }, 2000);
                }
                
            }).catch(err =>{
                console.log(err)
            })
        }

        

               
    }
   
    render() { 

        const back = {
            background: '#071d48',
            color : 'white'
        };

        const back2 = {
            background: 'white',
            color : 'black'
        };
        const noti = <Noti/>
        const notiErr = <NotiErr msg={this.state.message}/>

        if(this.state.isAuth) {
            return <Redirect to="/" />
        }

        return ( 
            <div className="akila-user" style={{overflow:'hidden'}}>
               
                {this.state.noti ? noti : null}
                {this.state.notiErr ? notiErr : null}
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
                    <div>
                    <div style={{color:'black'}} className="login-reg">
                        <p>Please select the desierd action</p>
                                <div class="container">
                                    <div onClick = {() => this.role('reg')} style={this.state.role == 'reg' ? back : back2}> <b>New user sign-up</b> </div>
                                    <div onClick = {() => this.role('login')} style={this.state.role == 'login' ? back : back2}> <b>Login</b> </div>
                                </div>
                                </div>
                    <div className="login-form">
                        <div className="login" style={{width:'600px',margin:'0 auto',marginTop:'0px',borderRadius:'10px'}}>
                            <p><b>{this.state.role == 'reg'?'Attendee Registration Form' : 'Attendee Login Form'}</b></p>
                               <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="" />
                               <div className="overlay">dsdsdsd</div>
                               <input  type="text" onChange={this.handleChange} name="username" id="" placeholder="Username" value={this.state.username}/>
                               <input style={{textTransform: 'revert'}}  type="text" onChange={this.handleChange} name="password" id="password" value={this.state.password} placeholder={this.state.role == 'reg' ? 'Enter new password' : 'Enter password'}/>
                               <input type="text" onChange={this.handleChange} value={this.state.repass} placeholder="Re-enter the password" name="repass" hidden={this.state.hidden}/>
                               <input type="text" onChange={this.handleChange} value={this.state.email} placeholder="E-mail address" name="email" hidden={this.state.hidden}/>
                               <button onClick={this.handleSubmit}>{this.state.role == 'reg' ? 'Sign Up' : 'Log-in'}</button>
                        </div>
                    </div>
                    </div>
                     
                </div>
            </div>
        );
    }
}
 
export default UserReg;