import React, { Component } from 'react'
import './../../assets/css/WorkshopDetails/WorkDashHome.css'
import { Modal} from 'antd';

import config from '../../config.json'

class PendingWorkshops extends Component {

    constructor(props){
        super(props)
        this.state={
            pendworkshops:[],
            visible:'false'
        }
        // this.approveWorkshop = this.approveWorkshop.bind(this);
        
    }

    showModal = () => {
        this.setState({visible : 'true'})
    };
    
    handleOk = () => {
        this.setState({visible : 'false'})
    };
    
    handleCancel = () => {
        this.setState({visible : 'false'})
    };

    componentDidMount(){
        this.fetchItems(); 
    }

    fetchItems(){
        fetch(config.local + '/wShop/pending').then(res => res.json()).then(data => this.setState({pendworkshops:data})).catch(err => console.log(err))
    }
    
    approveWorkshop(e){
        fetch(config.local + '',{
            method : 'patch',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json()).then(data =>{
            
            if(res.data.status === 200){
                alert("Successfully updated");
            }
            else {
                alert("Failed");
            }
            
        }).catch(err =>{
            console.log(err)
        })

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
                                    {/* <th className="nt-td">Workshop Id</th> */}
                                    <th className="nt-td">Workshop Title</th>
                                    <th className="nt-td">Workshop Date</th>
                                    <th className="nt-td">Conductor</th>
                                    {/* <th className="nt-td">Created Date</th> */}
                                    <th className="nt-td">Approval</th>
                                </tr>
                            </thead>
                            <tbody>

                            {this.state.pendworkshops.map((workshop) => {
                                return(
                                        <tr>
                                            {/* <td className="nt-td">{workshop._id}</td> */}
                                            <td className="nt-td">{workshop.title}</td>
                                            <td className="nt-td">{workshop.eventDate}</td>
                                            <td className="nt-td">{workshop.conductor}</td>
                                            {/* <td className="nt-td">{workshop.dateCreated}</td> */}
                                            <td>
                                                <button className="nt-approve-btn" onClick={this.approveWorkshop}> Approve </button>
                                                <button className="nt-decline-btn"> Decline </button>
                                            </td>
                                        </tr>
                                );
                            })}
                                
                            </tbody>
                        </table>
                    </div>

                </div>

                {/* <Modal title="Basic Modal" 
                    visible={this.state.visible} 
                    onOk={handleOk} 
                    onCancel={handleCancel}
                    >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>             */}
                
            </div>
        )
    }
}

export default PendingWorkshops
