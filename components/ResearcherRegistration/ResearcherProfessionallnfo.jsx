import React , {Component} from 'react'

class ResearcherProfessionalInfo extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <div className='form-container'>
                        <p className='form-Element-Title'>Current WorkPlace</p>
                        <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pEmail'/>
                                        <label>Name of the WorkPlace</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <p className='form-Element-Title'>Current Occupation</p>
                        <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input' id='pEmail'/>
                                        <label>Occupation</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Email (Work)</p>
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <input type='email' className='Researcher-form-input' id='pEmail'/>
                                    <label>Email</label>
                                </div>
                            </div>
                    </div>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Phone (Work)</p>
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
                            <p className='form-Element-Title'>Address (Work)</p>
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

export default ResearcherProfessionalInfo