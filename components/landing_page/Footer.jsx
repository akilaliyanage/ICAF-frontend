import React, { Component } from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram, AiOutlineSlack } from "react-icons/ai";
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <div class="container">
                <div className="links"> 
                    <p>Get in touch with us</p>
                <div class="mapouter"><div class="gmap_canvas"><iframe width="100%" height="200" id="gmap_canvas" src="https://maps.google.com/maps?q=sliit&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><br></br></div></div>

                    <ul>
                        <li>
                            <AiFillFacebook/> 
                        </li>
                        <li>
                            <AiFillTwitterSquare/>
                        </li>
                        <li>
                            <AiOutlineInstagram/>
                        </li>
                        <li>
                            <AiOutlineSlack/>
                        </li>
                    </ul>
                </div>
                <div className="ql">
                    <p>Quick links</p>

                    <ul>
                        <li>
                            <p>Main topic</p>
                        </li>
                        <li>
                            <p>About</p>
                        </li>
                        <li>
                            <p>Speakers</p>
                        </li>
                        <li>
                            <p>Additional speakers</p>
                        </li>
                        <li>
                            <p>
                            Conference Tracks
                            </p>
                        </li>
                    </ul>
                    
                </div>  
                <div className="email">
                    <p>
                        Additional Links
                    </p>

                    <ul>
                        <li>
                            <p>
                                <a href="mailto:icaf@sliit.lk">icaf@sliit.lk</a>
                            </p>
                        </li>
                        <li>
                            <p>
                                <a href="mailto:icafinfo@sliit.lk">icafinfo@sliit.lk</a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
            <p className="copy">Copyright© 2021 ICAF-sliit</p>
            </div>
            </div>
         );
    }
}
 
export default Footer;