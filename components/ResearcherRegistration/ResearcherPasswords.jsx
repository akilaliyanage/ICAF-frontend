import React , {Component} from 'react'

class ResearcherPasswords extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>
                    <div className='form-container'>
                            <p className='form-Element-Title'>Password</p>
                            <div className='form-row-container'>
                                <div className='passwordSection-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-name' id='password'/>
                                        <label for='fName'>Password</label>
                                    </div>
                                </div>
                                <div className='passwordSection-container'>
                                    <div className='form-container'>
                                        <p className='form-Element-Title'>Confirm Password</p>
                                        <div className='form-Element-container'>
                                            <input type='text' className='Researcher-form-input-name' id='confPassword'/>
                                            <label>Confirm Password</label>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ResearcherPasswords