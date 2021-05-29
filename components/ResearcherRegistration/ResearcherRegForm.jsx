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
        this.state={
            //Personal Information States
            fName : '', lName : '', mName : '', NIC : '', pEmail : '', pCountryCode :'', pPhone : '',
            pAddL1 : '', pAddL2 : '', pCity : '', pState : '', pZip : '',

            //Professional Informaton States
            wPlace : '', occupation : '',wEmail : '', wCountryCode :'', wPhone : '',
            wAddL1 : '', wAddL2 : '', wCity : '', wState : '', wZip : '',

            qualifications : [],
            memberships : [],
            publications : [],

            qualificationCount : 0,
            membershipCount : 0,
            publicationCount : 0,

            //Passwords States
            password : '', confPassword : '',
        }

        this.getValueOnChange = this.getValueOnChange.bind(this)
    }

    getValueOnChange(val){
        this.setState({[val.target.name] : val.target.value})
        console.log(val.target.name , val.target.value)
    };

    render(){
            return(
                <React.Fragment>
                    <RegFormHeading title='ICAF - Researcher Registration Form'/>

                    <RegFormGeneralInfo/>

                    <RegFormSubHeading title='General Information' />

                    <ResercherGeneralInfo getValueOnChange={this.getValueOnChange}/>

                    <RegFormSubHeading title='Professional Information' />

                    <ResearcherProfessionalInfo getValueOnChange={this.getValueOnChange}/>

                    <RegFormSubHeading title='Academic Information' />

                    <ResearcherAcademicInfo getValueOnChange={this.getValueOnChange}/>

                    <RegFormSubHeading title='Passwords' />

                    <ResearcherPasswords getValueOnChange={this.getValueOnChange}/>

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