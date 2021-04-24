import React, { Component } from 'react'
class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navbar_items: [],
         }
    }

    componentDidMount() {
        var navbar_items = ["iten 1", "item 2", "item 3"];
        
        this.setState({ navbar_items: navbar_items });
    }


    render() { 
        return (
            <div className='akila-header'>
                <nav className='akila-navbar'>
                    <a href="" className='akila-brand'>Brand</a>
                    <input type="checkbox" id="nav" className='akila-hidden' />
                    <label htmlFor="nav" className='akila-nav-toggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                    <div className='akila-wrapper'>
                        <ul className='akila-menu'>
                            {this.state.navbar_items.map(item => {
                                return (
                                    <li className="akila-menu-item"><a href="#">{item}</a></li>
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