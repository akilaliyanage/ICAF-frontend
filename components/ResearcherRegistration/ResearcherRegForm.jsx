import React, { Component} from 'react'
import RegFormHeading from '../ResearcherRegistration/RefFormHeading'
import RegFormSubHeading from '../ResearcherRegistration/RegFormSubHeading'
import RegFormGeneralInfo from '../ResearcherRegistration/GeneralInfo'

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

                    
                </React.Fragment>
            );
        }
}

export default ResearcherRegForm