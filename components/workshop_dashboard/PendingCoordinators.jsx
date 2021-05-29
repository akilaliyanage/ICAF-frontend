import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

class PendingCoordinators extends Component {

    constructor(props){
        super(props)
        this.state={
            pendCrd:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch("url").then(res => res.json()).then(data => this.setState({pendCrd:data})).catch(err => console.log(err))
    }
    

    render() {
        return (
            <div>
                <div className="nt-dcard-cont">
                    <div className="nt-approvedcard">

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                Pending Workshop Coordinators
                            </h3>
                        </div>

                        <table className="nt-table">
                            <thead>
                                <tr>
                                    <th className="nt-td">Coordinator Id</th>
                                    <th className="nt-td">Coordinator Name</th>
                                    <th className="nt-td">Study Feild</th>
                                    <th className="nt-td">Approve</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.pendCrd.map((pendCrd) => {
                                return(
                                        <tr>
                                            <td className="nt-td">{pendCrd._id}</td>
                                            <td className="nt-td">{pendCrd.name}</td>
                                            <td className="nt-td">{pendCrd.studyFeild}</td>
                                            <td className="nt-td">
                                                <button className="nt-approve-btn"> Approve </button>
                                            </td>
                                        </tr>
                                );
                            })}
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">
                                        <button className="nt-approve-btn"> Approve </button>
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

export default PendingCoordinators
