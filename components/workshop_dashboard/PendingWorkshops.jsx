import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

class PendingWorkshops extends Component {

    constructor(props){
        super(props)
        this.state={
            pendworkshops:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch("url").then(res => res.json()).then(data => this.setState({pendworkshops:data})).catch(err => console.log(err))
    }
    

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                Approval Pending Workshops
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Workshop Id</th>
                                    <th className="nt-td">Workshop Title</th>
                                    <th className="nt-td">Workshop Date</th>
                                    <th className="nt-td">Conductor</th>
                                    <th className="nt-td">Created Date</th>
                                    <th className="nt-td">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.pendworkshops.map((workshop) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{workshop._id}</td>
                                            <td className="nt-td">{workshop.title}</td>
                                            <td className="nt-td">{workshop.eventDate}</td>
                                            <td className="nt-td">{workshop.conductor}</td>
                                            <td className="nt-td">{workshop.dateCreated}</td>
                                            <td>
                                                <button className="nt-approve-btn"> Approve </button>
                                                <button className="nt-decline-btn"> Decline </button>
                                            </td>
                                        </tr>
                                );
                            })}
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
                            </tbody>
                        </table>
                    </div>

                </div>
                
            </div>
        )
    }
}

export default PendingWorkshops
