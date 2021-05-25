import React ,  {Component} from 'react'
import NavBar from '../landing_page/NavBar'
import config from '../../config.json'
import '../../assets/css/ResearcherReg/ResearcherReg.css'

class RegisterResearcher extends Component {
    constructor(props){
        super(props)
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
                <div className='addResearcherBack'>
                    <div className='akila-template-header'>
                        <NavBar items={this.state.nav_Items}/>
                    </div>
                    <div className='regForm_FlexContainer'>
                        <div className='regFormBack'>
                            <h1>hello</h1>
                        </div>
                        <div className='regFormRight'>
                            <h1>hello</h1>
                        </div>
                    </div>
                </div>
            )
    }
}
export default RegisterResearcher