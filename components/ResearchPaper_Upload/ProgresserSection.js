import React , {Component} from 'react'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import DescriptionIcon from '@material-ui/icons/Description'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward'

class ProgresserSection extends Component {
    constructor(props){
        super(props)
        this.state = {

        }

    }

    render(){
        return (
            <React.Fragment>
                <div className="row d-flex justify-content-end">
                    <div className="col-4 d-flex justify-content-between">
                        <Button variant="contained" color="default" startIcon={<ArrowBackIcon/>}>Back</Button>
                    <Button variant="contained" color="default" endIcon={<ArrowForwardIcon/>}>Next</Button>
                    <Button variant="contained" style={{backgroundColor:"green" , color:"white"}} startIcon={<DescriptionIcon/>}>Submit</Button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ProgresserSection