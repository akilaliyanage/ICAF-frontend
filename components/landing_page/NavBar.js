import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.scss'
import config from '../../config.json'
import {AiOutlineUser, AiOutlineDown } from 'react-icons/ai'
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.fetchTopic = this.fetchTopic.bind(this)
        this.logout = this.logout.bind(this);
        this.state = {
            navbar_items: [],
            topic : '',
            show : true
         }
    }

    componentDidMount(){
        this.fetchTopic()
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"]})
        }).catch(err =>{
            //alert(err)
        })
    }

    logout(){
        window.localStorage.setItem('username','')
        window.localStorage.setItem('token','')
        window.localStorage.setItem('id','')

        window.location.reload();
    }

    render() { 
        //const item = <li hidden={window.localStorage.getItem('token') == null?true : false} onClick={this.logout} style={{backgroundColor:'#1b4d72',color:'rgb(63, 65, 69)',padding:'10px', borderRadius:'10px'}} className="akila-menu-item"><a href=""><AiOutlineUser/>   hello {window.localStorage.getItem('username') + ' | SIGN-OUT'}</a></li>
        return (
            <div className='akila-header' data-testid='nav-bar'>
                <nav className='akila-navbar'>
                    <a href="" className='akila-brand'>{this.state.topic}</a>
                    <input type="checkbox" id="nav" className='akila-hidden' />
                    <label htmlFor="nav" className='akila-nav-toggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className='akila-wrapper'>
                        <ul className='akila-menu'>
                            {this.props.items.map(item => {
                                return (
                                    <li data-testid="nav-list" className="akila-menu-item" key={item._id}><a href={item.url}>{item.name}</a></li>
                                );
                            })}
                             <li hidden={this.state.show ? false : true} 
                             className="akila-menu-item"> 
                                <div className="dropdown">
                                <a><AiOutlineDown/> REGISTRATIONS</a>
                                    <div className="dropdown-content">
                                        <br />
                                        <Link to="/userReg"><p>Attendee Registration</p></Link>
                                        <Link to=""><p>researcher Registration</p></Link>
                                        <Link to=""><p>workshop presenter</p></Link>
                                    </div>
                                </div>
                             </li>
                            <li onClick={this.logout} style={{backgroundColor:'#1b4d72',color:'rgb(63, 65, 69)',padding:'10px', borderRadius:'10px'}} className="akila-menu-item"><a href=""><AiOutlineUser/> {window.localStorage.getItem('token') != '' ? 'hello  ' +  window.localStorage.getItem('username') + ' | SIGN-OUT': 'hello stranger'}</a></li>
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;