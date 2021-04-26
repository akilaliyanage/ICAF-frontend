import React, { Component } from 'react'
import Speaker from './Speaker'

class KeynoteTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (
            <div>
                <div class="flex-container">
                    <div className="topics">
                        <h1>Our</h1>
                        <h2>Keynote</h2>
                        <h1>Speakers</h1>
                    </div>
                    <div className="info">
                        <div>
                             <table>
                            <tr>
                                <td>
                                    <Speaker/>
                                    </td>
                                    <td>
                                        <Speaker/>
                                    </td>
                            </tr>
                            <tr>
                                <td>

                                </td>
                                <td>

                                </td>
                            </tr>
                        </table>
                       </div>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default KeynoteTemplate;