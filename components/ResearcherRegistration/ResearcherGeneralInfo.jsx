import React ,  {Component} from 'react'

class ResercherGeneralInfo extends Component{

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Name In Full</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' id='fName'/>
                                    <label for='fName'>First Name</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' id='mName'/>
                                    <label>Middle Name</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-name' id='lName'/>
                                    <label>Last Name</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>NINO / NIC</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' id='NIC'/>
                                    <label>National Insurence No / National Identity Card No</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Email (Personal)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='email' className='Researcher-form-input' id='pEmail'/>
                                    <label>Email</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Phone</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' id='CountryCode'/>
                                    <label>Country Code</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' id='pPhone'/>
                                    <label>Phone</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Address</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' id='pAddressL1'/>
                                    <label>Address Line 1</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input' id='pAddressL2'/>
                                    <label>Address Line 2</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'></p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' id='pAddressCity'/>
                                    <label>City</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' id='pAddressState'/>
                                    <label>State/Province</label>
                                </div>
                                <div className='form-Element-container'>
                                    <input type='text' className='Researcher-form-input-address-extras' id='pAddressZip'/>
                                    <label>Postal/Zip Code</label>
                                </div>
                            </div>
                    </div>
                </div>
            </React.Fragment>
        ); 
    }
}

export default ResercherGeneralInfo