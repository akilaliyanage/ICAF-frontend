import React , {Component} from 'react'

class PublicationComponent extends Component{

    constructor(props){
        super(props)
        this.state ={}
    }

    render(){
        return(
            <React.Fragment>
                <div className='qualification-container'>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pubName'/>
                                        <label>Publication</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pubURL'/>
                                        <label>Conference/Journal/Book</label>
                                    </div>
                                    <div className='form-Element-container'>
                                        <select className='Researcher-form-input-address-extras' id='pubYear'>
                                                {this.props.yearList.map(year =>(
                                                    <option key={year} value={year}>
                                                        {year}
                                                    </option>
                                                ))}
                                        </select>
                                        <label>Year</label>
                                    </div>
                                </div>
                                <div className='form-row-container qualification-row'>
                                    <div className='form-Element-container'>
                                        <input type='text' className='Researcher-form-input-long' id='pubName'/>
                                        <label>URL</label>
                                    </div>
                                </div>
                        </div>
            </React.Fragment>
        );
    }

}

export default PublicationComponent