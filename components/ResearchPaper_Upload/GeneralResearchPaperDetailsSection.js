import React , {Component} from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import AddCircleIcon from '@material-ui/icons/AddCircle'

class ResearchPaperGeneralDetailsSection extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }
    
    render() {
        return(
            <React.Fragment>
                <h4 className='form-part-header'>Research Paper - General  Details</h4>
                <div className='input-element-container'>
                    <div className="row mt-5">
                        <div className="col-6">
                            <TextField id="Paper_Title" fullWidth label="Research Paper Title" variant="outlined" size="small"/>
                        </div>
                        <div className="col-6">
                            <TextField id="research_Area" fullWidth label="Research Area" variant="outlined" size="small"/>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                        <div className="col-3">
                            <TextField id="research_Area" fullWidth label="Researcher Name" variant="outlined" size="small"/>
                        </div>
                        <div className="col-1 ">
                            <IconButton style={{color:"green", width:5}} aria-label="Add More Researchers">
                                <AddCircleIcon fontSize="large"/>
                            </IconButton>
                        </div>
                    </div>
                </div>
                
            </React.Fragment>
        )
    }
}

export default ResearchPaperGeneralDetailsSection