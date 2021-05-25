import React, { Component} from 'react'
import RegFormHeading from '../ResearcherRegistration/RefFormHeading'
import RegFormSubHeading from '../ResearcherRegistration/RegFormSubHeading'
import RegFormGeneralInfo from '../ResearcherRegistration/GeneralInfo'
import ResercherGeneralInfo from '../ResearcherRegistration/ResearcherGeneralInfo'
import ResearcherProfessionalInfo from '../ResearcherRegistration/ResearcherProfessionallnfo'
import ResearcherAcademicInfo from '../ResearcherRegistration/ResearcherAcademicInfo'

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
                    
                </React.Fragment>
            );
        }
}

export default ResearcherRegForm