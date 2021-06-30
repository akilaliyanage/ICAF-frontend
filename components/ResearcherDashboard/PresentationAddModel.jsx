import React, { Component } from 'react'

export default class PresentationAddModel extends Component {

    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.opened && 
                    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Request For Research Paper Presentation</h5>
                                    <button type="button" className="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <h2>Test</h2>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-mdb-dismiss="modal"> Close </button>
                                    <button type="button" className="btn btn-primary">Make Request</button>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </React.Fragment>
        )
    }
}
