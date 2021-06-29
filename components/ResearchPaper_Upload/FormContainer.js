import React, { Component} from 'react';
import Paper from '@material-ui/core/Paper'
import ResearchPaperGeneralDetailsSection from './GeneralResearchPaperDetailsSection'
import ResearcgPaperUploadSection from './ResearcgPaperUploadSection'
import ProgresserSection from './ProgresserSection'
import DeclarationSection from './DeclarationSection'

class FormContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            Currentstep : 0,
            isStep_1_Valid : false,
            isStep_2_Valid : false,
            isStep_3_Valid : false,
            paperName : '',
            researcherName : '',
            researchArea : '',
            description : '',
            researchPaper : '',
            isAgree : false,
            noOfPages : 0,
            Institute : '',
            isApproved : false,
            showSubmit : false
        }
        this.getValueOnChange = this.getValueOnChange.bind(this);
        this.stepUp = this.stepUp.bind(this);
        this.stepDown = this.stepDown.bind(this);
        this.validateInputs = this.validateInputs.bind(this);
        this.showNotification = this.showNotification.bind(this);
        this.fileChanger = this.fileChanger.bind(this);
        this.setAgreement = this.setAgreement.bind(this);
    }

    validateInputs(){
        if(this.state.paperName != '' && this.state.researcherName != '' && this.state.researchArea != '')
            this.setState({isStep_1_Valid : true});
        if(this.state.researchPaper != '' && this.state.researchPaper != null && this.state.noOfPages != 0)
            this.setState({isStep_2_Valid : true});
    }

    getValueOnChange(val){
        this.validateInputs();
        this.setState({[val.target.name] : val.target.value})
        console.log(val.target.name , val.target.value)
    };

    setAgreement(){
        if(!this.state.isAgree){
            console.log('Agreement on false' , this.state.isAgree)
            this.setState({isAgree : true});
            this.setState({showSubmit : true});
        }
        else{
            console.log('Agreement on true' , this.state.isAgree)
            this.setState({isAgree : false});
        }
    };

    showNotification(val){
        alert(val);
    }

    stepUp(){
        if(this.state.Currentstep < 2){
            this.validateInputs();
            if((this.state.Currentstep == 0 && !this.state.isStep_1_Valid) ||(this.state.Currentstep == 1 && !this.state.isStep_2_Valid))
                this.showNotification("Please Fill Necesssary fields to proceed")
            else if((this.state.Currentstep == 2 && !this.state.isAgree)) {
                this.showNotification("Please Agree to conditions to proceed")
            }
            else{
                this.setState({Currentstep : this.state.Currentstep + 1});
                this.props.stepperUp();
            }
        }
    };

    stepDown(){
        if(this.state.Currentstep != 0){
            this.validateInputs();
            this.setState({Currentstep : this.state.Currentstep - 1})
            this.props.stepperDown();
        }
    };
    fileChanger(researchPaper){
        this.validateInputs();
        this.setState({researchPaper : researchPaper});
    };

    render(){
        let formSection;
        switch (this.state.Currentstep){
            case 0:
               formSection = <ResearchPaperGeneralDetailsSection getValueOnChange={this.getValueOnChange}/>
               break;
            case 1:
               formSection = <ResearcgPaperUploadSection getValueOnChange={this.getValueOnChange} fileChanger={this.fileChanger} />
               break;
            case 2:
               formSection = <DeclarationSection setAgreement={this.setAgreement}/>
               break;
        }
        return (
            <React.Fragment>
                <Paper className='form-container-bounderies'>
                    {formSection}
                    <div className="section-seperater"></div>
                    <ProgresserSection stepUp={this.stepUp} stepDown={this.stepDown} showSubmit={this.state.showSubmit}/>
                </Paper>
            </React.Fragment>
        )
    }
}

export default FormContainer