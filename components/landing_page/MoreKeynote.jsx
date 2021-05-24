import React, { Component } from 'react';
class MoreKeynote extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                 <h1>Latest <span>News</span></h1>
                <table>
                    <tr>
                        <td>
                        <img src="" alt="" />
                        </td>
                        <td>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd2drefzPMEho_WG9Wk14cd5RnKKsQkKA_A&usqp=CAU" alt="" />
                                <figcaption>
                                    <div class="fig-title">Fern.</div>
                                    <div class="fig-author">by Annie Spratt</div>
                                </figcaption>
                        </td>
                        <td>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd2drefzPMEho_WG9Wk14cd5RnKKsQkKA_A&usqp=CAU" alt="" />

                        </td>
                        <td>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd2drefzPMEho_WG9Wk14cd5RnKKsQkKA_A&usqp=CAU" alt="" />

                        </td>
                        <td>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKd2drefzPMEho_WG9Wk14cd5RnKKsQkKA_A&usqp=CAU" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
         );
    }
}
 
export default MoreKeynote;