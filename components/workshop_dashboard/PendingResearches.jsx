import React, { Component } from 'react'

import config from '../../config.json'

class PendingResearches extends Component {
    constructor(props){
        super(props)
        this.state={
            pendResearches:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.local + '/resrch/pending').then(res => res.json()).then(data => this.setState({pendResearches:data})).catch(err => console.log(err))
    }
    

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                Approval Pending Researches
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Paper Name</th>
                                    <th className="nt-td">Researcher Name</th>
                                    <th className="nt-td">Preview</th>
                                    {/* <th className="nt-td">Conductor</th>
                                    <th className="nt-td">Created Date</th> */}
                                    <th className="nt-td">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.pendResearches.map((research) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{research.paperName}</td>
                                            <td className="nt-td">{research.researcherName}</td>
                                            {/* <td className="nt-td">{research.eventDate}</td>
                                            <td className="nt-td">{research.conductor}</td> */}
                                            <td className="nt-td">Preview</td>
                                            <td>
                                                <button className="nt-approve-btn"> Approve </button>
                                                <button className="nt-decline-btn"> Decline </button>
                                            </td>
                                        </tr>
                                );
                            })}
                                {/* <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
                                        <button className="nt-decline-btn"> Decline </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
                                        <button className="nt-decline-btn"> Decline </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
                                        <button className="nt-decline-btn"> Decline </button>
                                    </td>
                                </tr> */}
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default PendingResearches
