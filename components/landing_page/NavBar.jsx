import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.scss'
import config from '../../config.json'

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.fetchTopic = this.fetchTopic.bind(this)
        this.state = {
            navbar_items: [],
            topic : ''
         }
    }

    componentDidMount(){
        this.fetchTopic()
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"]})
        }).catch(err =>{
            alert(err)
        })
    }

    render() { 
        return (
            <div className='akila-header'>
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
                                    <li className="akila-menu-item"><a href={item.url}>{item.name}</a></li>
                                );
                            })}
                        </ul>
                    </div>
                </nav>
            </div>
         );
    }
}
 
export default NavBar;