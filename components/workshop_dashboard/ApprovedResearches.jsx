import React, { Component } from 'react'

export class ApprovedResearches extends Component {
    constructor(props){
        super(props)
        this.state={
            researchs:[]
        }
    }

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch("url").then(res => res.json()).then(data => this.setState({researchs:data})).catch(err => console.log(err))
    }


    render() {
        
        return (
            <div>
                <div className="nt-dcard-cont">

                    <div className="nt-approvedcard">
                        

                        <div className="nt-div-head">
                            <h3 className="nt-div-head-text">
                                All approved Researches
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
                                {this.state.researchs.map((research) => {
                                    return(
                                            <tr>
                                                <td className="nt-td">{research._id}</td>
                                                <td className="nt-td">{research.title}</td>
                                                <td className="nt-td">{research.eventDate}</td>
                                                <td className="nt-td">{research.conductor}</td>
                                                <td className="nt-td">{research.dateCreated}</td>
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

export default ApprovedResearches
