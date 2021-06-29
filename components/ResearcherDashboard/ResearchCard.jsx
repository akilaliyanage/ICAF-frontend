import React, { Component } from 'react'
import {Document , Page , View, Text} from 'react-pdf/dist/esm/entry.parcel';
import samplePdf from '../../assets/media/Mahen/samplePdf.pdf'
import {Link} from 'react-router-dom'

export default class ResearchCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            pdfDefault : samplePdf,
        }
    }
    render() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-4'>
                        <div className="card p-3 border-success mb-2" style={{borderRadius:10 , borderWidth:4 , borderColor:'#4CAF50' , borderStyle:'solid'}}>
                            <Document  file={this.state.pdfDefault}>
                                <Page height="350" pageNumber={1}/>
                            </Document>
                        </div>
                    </div>
                    <div className='col-8 pl-4 pr-4'>
                        <div className='row d-flex justify-content-start'>
                            <h1 className='mt-2'>Research paper Name</h1>
                            <h3 className='mt-2'>Researcher Name</h3>
                            <h3 className='mt-2'>Researcher Area</h3>
                            <p className='text-center mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus modi illo blanditiis? Porro debitis accusantium, ut aliquid ullam alias eum?</p>
                        </div>
                        <div className='row d-flex justify-content-center'>
                            <div className='col-5Link'>
                                <h2>Status : <span className="badge bg-warning mr-3">Pending</span></h2>
                                {/* <h2><span className="badge bg-success">Approved</span></h2>
                                <h2><span className="badge bg-danger">Declined</span></h2> */}
                            </div>
                        </div>
                        <div className='row d-flex justify-content-center mt-2'>
                            <div className='d-grid col-6 mx-auto'>
                                <Link type="button" className="btn btn-primary btn-lg">Schedule Presentation</Link>
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <Link to='/payment' type="button" className="btn btn-success btn-lg">Make Payment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
