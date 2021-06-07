import React ,  { Component} from 'react';
import NavBar from '../landing_page/NavBar'
import config from '../../config.json'
import '../../assets/css/ResearcherReg/ResearcherReg.css'
import '../../assets/css/REsearchPaper_Upload/RpaperUpload.css'

class ResearchPaperUploadeComponant extends Component {
    constructor(props){
        super(props);
        this.state = {
            nav_Items : [],
        }
    }
    componentDidMount(){
            fetch(config.host + "nav-items")
            .then(res => res.json())
            .then(data => {
                console.log(data)
                this.setState({
                    nav_Items: data
                })
            })
        }

    render(){
        return (
            <React.Fragment>
                <div className='uploadResearchPaperBack'>
                    <div className='akila-template-header'>
                        <NavBar items={this.state.nav_Items}/>
                    </div>
                    <div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default ResearchPaperUploadeComponant