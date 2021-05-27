import React , {Component} from 'react'
import QualificationSection from '../ResearcherRegistration/qualificationInputSection'
import MembershipComponent from '../ResearcherRegistration/membershipComponent'
import PublicationComponent from '../ResearcherRegistration/publicationsComponant'

class ResearcherAcademicInfo extends Component{

    constructor(props){
        super(props)
        this.state ={
            UniList : [],
            sortedUniList : [],
            yearList : [],
            qualificationList : [],
            membershipList : [],
            publicationList : [],
        }

        this.populateQualifications = this.populateQualifications.bind(this)
        this.populateMembership = this.populateMembership.bind(this)
        this.populatePublications = this.populatePublications.bind(this)
        
    }

    componentDidMount(){

        fetch('http://universities.hipolabs.com/search?name=' , {
            method: 'GET'
        })
        .then(response => response.json().
        then(data => {
            this.setState({UniList : data})
            this.setState({sortedUniList : UniList})
        } 
        ))

        const currentYear = (new Date()).getFullYear();
        const yearRange = 100;

        for(let i = 0 ; i < yearRange; i++){
            let year = currentYear - i;
            let tempArray = this.state.yearList;
            tempArray.push(year); 
            this.setState({yearList:tempArray})
        }

        
        //Add First Entry to Qualification list
        var tempCompo = (<QualificationSection yearList = {this.state.yearList} />)
        let tempQualificationArray = this.state.qualificationList;
        tempQualificationArray.push(tempCompo); 
        this.setState({qualificationList:tempQualificationArray})

        //Add First Entry to membership list
        var tempCompo_member = (<MembershipComponent/>)
        let tempmemberArray = this.state.membershipList;
        tempmemberArray.push(tempCompo_member); 
        this.setState({membershipList:tempmemberArray})

        //Add First Entry to membership list
        var tempCompo_publication = (<PublicationComponent yearList = {this.state.yearList}/>)
        let temppublicationArray = this.state.publicationList;
        temppublicationArray.push(tempCompo_publication); 
        this.setState({publicationList:temppublicationArray})
    }

    populateQualifications(){
        var tempCompo = (<QualificationSection yearList = {this.state.yearList} />)
        let tempQualificationArray = this.state.qualificationList;
        tempQualificationArray.push(tempCompo); 
        this.setState({qualificationList:tempQualificationArray})
    }
    populateMembership(){
        var tempCompo_member = (<MembershipComponent/>)
        let tempmemberArray = this.state.membershipList;
        tempmemberArray.push(tempCompo_member); 
        this.setState({membershipList:tempmemberArray})
    }
    populatePublications(){
        var tempCompo_publication = (<PublicationComponent yearList = {this.state.yearList}/>)
        let temppublicationArray = this.state.publicationList;
        temppublicationArray.push(tempCompo_publication); 
        this.setState({publicationList:temppublicationArray})
    }

    


    render(){

        return(
            <React.Fragment>
                <div className='Regform-inner'>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Qualification</p>
                        <div className='column-form-container'>
                            {this.state.qualificationList.map((section) => (<div>{section}</div>))}
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populateQualifications}>Add More</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Memberships</p>
                        <div className='form-row-container'>
                            <div className='column-form-container'>
                                {this.state.membershipList.map((section) => (<div>{section}</div>))}
                                <div className='form-row-container'>
                                    <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populateMembership}>Add More</button>
                                </div>
                            </div>
                                        
                        </div>
                    </div>
                            
                    </div>

                    <div className='form-container'>
                        <p className='form-Element-Title'>Previous Publications</p>
                        <div className='column-form-container'>
                            {this.state.publicationList.map((section) => (<div>{section}</div>))}
                            <div className='form-row-container'>
                                <div className='form-Element-container'>
                                    <button className='success-btn' onClick={this.populatePublications}>Add More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }

}

export default ResearcherAcademicInfo