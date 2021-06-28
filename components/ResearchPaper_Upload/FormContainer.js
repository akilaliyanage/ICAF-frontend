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

        }
    }

    render(){
        return (
            <React.Fragment>
                <Paper className='form-container-bounderies'>
                    {/* <ResearchPaperGeneralDetailsSection/> */}
                    {/* <ResearcgPaperUploadSection/> */}
                    <DeclarationSection/>
                    <div className="section-seperater"></div>
                    <ProgresserSection/>
                </Paper>
            </React.Fragment>
        )
    }
}

export default FormContainer