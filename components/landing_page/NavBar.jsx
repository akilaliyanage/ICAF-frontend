import React, { Component } from 'react'
import '../../assets/css/Landing_Page/index.scss'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar_items: [],
         }
    }

    componentDidMount() {
        
    }


    render() { 
        return (
            <div className='akila-header'>
                <nav className='akila-navbar'>
                    <a href="" className='akila-brand'>ICAF</a>
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