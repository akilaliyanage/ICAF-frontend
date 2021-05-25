import React , {Component} from 'react'

class ResearcherAcademicInfo extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div className='Regform-inner'>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Qualification</p>
                        <div className='qualification-container'>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pEmail'/>
                                        <label>Name of the Degree</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pEmail'/>
                                        <label>Name of the Degree</label>
                                    </div>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input' id='pEmail'/>
                                        <label>Name of the Degree</label>
                                    </div>
                                </div>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <button className='success-btn'>Add More</button>
                                    </div>
                                </div>
                        </div>
                    </div>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Qualification</p>
                        <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pEmail'/>
                                        <label>Name of the Degree</label>
                                    </div>
                                </div>
                        </div>
                    </div>
                    <div className='form-row-container'>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pEmail'/>
                                        <label>University</label>
                                    </div>
                                </div>
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input' id='pEmail'/>
                                        <label>Year</label>
                                    </div>
                                </div>
                        </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ResearcherAcademicInfo