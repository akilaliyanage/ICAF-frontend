import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'

class ApprovedWorkshops extends Component {

    constructor(props){
        super(props)
        this.state={
            workshops:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch("url").then(res => res.json()).then(data => this.setState({workshops:data})).catch(err => console.log(err))
    }


    render() {
        
        return (
            <div>
                <div className="nt-dcard-cont">

                    <div className="nt-approvedcard">
                        

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                All approved Workshops
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
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.workshops.map((workshop) => {
                                    return(
                                            <tr>
                                                <td className="nt-td">{workshop._id}</td>
                                                <td className="nt-td">{workshop.title}</td>
                                                <td className="nt-td">{workshop.eventDate}</td>
                                                <td className="nt-td">{workshop.conductor}</td>
                                                <td className="nt-td">{workshop.dateCreated}</td>
                                            </tr>
                                    );
                                })}

                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr>
                                <tr>
                                    <td className="nt-td">test id</td>
                                    <td className="nt-td">Test title</td>
                                    <td className="nt-td">Test date</td>
                                    <td className="nt-td">Test conductor</td>
                                    <td className="nt-td">Test date</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        )
    }
}

export default ApprovedWorkshops
