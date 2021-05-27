import React, { Component} from 'react'
import RegFormHeading from '../ResearcherRegistration/RefFormHeading'
import RegFormSubHeading from '../ResearcherRegistration/RegFormSubHeading'
import RegFormGeneralInfo from '../ResearcherRegistration/GeneralInfo'
import ResercherGeneralInfo from '../ResearcherRegistration/ResearcherGeneralInfo'
import ResearcherProfessionalInfo from '../ResearcherRegistration/ResearcherProfessionallnfo'
import ResearcherAcademicInfo from '../ResearcherRegistration/ResearcherAcademicInfo'
import ResearcherPasswords from '../ResearcherRegistration/ResearcherPasswords'

class ResearcherRegForm extends Component {

    constructor(props){
        super(props);
        this.state={}
    }

    render(){
            return(
                <React.Fragment>
                    <RegFormHeading title='ICAF - Researcher Registration Form'/>

                    <RegFormGeneralInfo/>

                    <RegFormSubHeading title='General Information' />

                    <ResercherGeneralInfo/>

                    <RegFormSubHeading title='Professional Information' />

                    <ResearcherProfessionalInfo/>

                    <RegFormSubHeading title='Academic Information' />

                    <ResearcherAcademicInfo/>

                    <RegFormSubHeading title='Passwords' />

                    <ResearcherPasswords/>

                    <hr className='Seperator'/>
                    <div className='form-btn-container'>
                        <button className='success-btn'>Cancel</button>
                        <button className='success-fail'>Register</button>
                    </div>
                    <hr className='Seperator'/>
                </React.Fragment>
            );
        }
}

export default ResearcherRegForm