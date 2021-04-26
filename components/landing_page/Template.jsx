import React, { Component } from 'react'
import NavBar from './NavBar'
import LatestNews from '../landing_page/LatestNews'
import config from '../../config.json'

class Template extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            navbar_items : [],
         }
    }

    componentDidMount(){

        // the item array should have array ob obkects as per lister in the below example before passing as props to the nav Bar
        // {
        //     "name" : "item 1",
        //     "url" : "test url"
        // }

        //calling the api to fetch data
        fetch(config.host + "/nav-items").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({navbar_items:data})
        })
    }
    render() { 
        return (
            <div className="akila-main-1">
                <div className='akila-template-header'>
                    <NavBar items={this.state.navbar_items}/>
                </div>

                <div className="akila-main-topic">
                    <h1>ICAF 2021</h1>
                    <h2>Strategic.Innovation</h2>
                    <h3>Sri Lanka, 10/20 Dec <span> @ SLIIT</span></h3>
                    <span> <b> Join us via </b> <a href="">Ms Teams </a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD5ElEQVR4nO2bTYscVRSG3xOSiMS40KWYzASCOjEaiYYguEzEuFBxfoEh+AvEP+DXzl0y0Qhu/AVJXAoS3TkQJ18GQU0GRBeCkxGSGQcfF3U6XV1dPV23vm5nul5oqrlf5z3vPaf7VtW9UocOUw2LaRzYLemApOckzUlak/SVmS21xaEVAYDtkvZLOqjE2Wf9+2wOhw1Jr5rZN21wq10A4AklDqYdnZP0UE7zNUnXJV2RdFXSU5JOSlo0sxfr5paH0gJkwveg+k4/ltdc0q/qO7rk3382s43UmDskrUvaMLMdZbmFYKwAHr57lDh7WMlsHpD0tKRtOV3+lnTNP9clLUr60cxWixACkCQzayU9t+cQ2CfpTUnPKyx8lyRdMbPfG2PbAO4LAGyT9LGk9zQYGUj6RWPC94EHcJIEd4FzwCngqOd6mzzopUGrAC677fnWjQ/yiCbAmtve2brxQR6tCpD+Fd8pSWa23pbxzQDsAz4DloF//boAzDRlME7ojeABrJKPO8CxxgzXPnBJHo7zwEvALr9e8PIVYG8jhmsdtAIP4PyI+p4IZ0bUzwBnPWXWC6fOBAqQey8AHPH6Wzl1xz1FwlNnAgXIXX8Au73+XqZ8NuV8eOpMoADjIuC3TPnZKqkziQKMcuSi15/OlC+XTZ0Bw2PIfT+cWoVxKVAAfNaOAI/4tef8CrAn06+3kAtKnaG7wTH4L7D9AIfA9quSXvdPGnckzZvZ7Uz5n5KeVPJQ5Yec8Z7x6x/57ApEwGao2j87Dsnf2QJwm+Tv7BZwOjvzqX4L3i8odWpzoG4BSvSbof8vUDh1anMgtgDe95g7mYcVmlwHTIIA3n8vcMZTZm1c6tRpuFYBCmAZeK2qvfuPvnrkyz6MrNo/O05BLJvZ5jMbYniSIiC0HXCC/mIoPHK2gABFnO8hu4bYEgKU6pf3YmOq0AkQm0BsdALEJhAbnQCxCcRGJ0BsArExVQIAQzdqoc8EN8N3Cn/u1zbe9uvNoZq61vJV0dS9ADAH/OXN3i1tuGkU4QHYKAGAD4FXgMdJ3gwdAj6g/7b5a5LtQOGG20BBAea92U+psm8Zjy+Bh0sbbgNlQ9mj4mXgU2DRZ/wf4CbwOXC0kuG2kJqtT4AXgEeDQrmq4doGrMijdChXNVzroBV4kLzpueFhXDyUqxpuZPAJ5pHOoXUnEHWbXNtIC3DDr2/EIBIdwDseffeAL5iSrbLpN0Mm6SNJ72t4s/TYvf51oed8W9vlh4wAs5LeUqTt8tEFyIItfmCiOzJT94BUOzS1X9IpPQiHpkLANB2bCwHDByfvKjk4eTUmrw4dpgj/A9ch2EWJwogoAAAAAElFTkSuQmCC"></img></span>    
                </div>

                <div className="akila-about-icaf">
                    <div class="flex-container">
                        <div>
                            <h1>About</h1>
                            <h2>ICAF</h2>
                            <h1>Conference</h1>
                        </div>
                        <div className="info">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure similique neque minus, dolore, cumque ratione vitae aut reiciendis, nisi odit eius veritatis doloribus aperiam eveniet nemo aspernatur aliquid impedit quos. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure labore nulla autem doloribus dolorum libero praesentium optio perferendis, incidunt reiciendis excepturi, sed omnis maxime quae repellat cupiditate odit, dolore amet. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam distinctio illo animi ullam omnis, est beatae commodi veritatis nihil, consequuntur rerum. Rerum laborum expedita sunt debitis? Aspernatur placeat quis laboriosam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae adipisci, dolore deserunt ea excepturi fugiat distinctio provident, ipsum non, quod alias officiis. Nisi culpa officiis, animi repellendus ex ullam facilis. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem velit sunt ullam quia delectus cumque pariatur officia quis aut reprehenderit a natus culpa, ducimus inventore id rerum aliquid rem ad? <br/> <br/> Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero fugit voluptatibus cupiditate repudiandae eligendi excepturi odio neque, voluptatum ab cum deserunt ex ea impedit sit alias vel ipsum obcaecati. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe molestiae nulla facere distinctio, est iusto impedit quod vitae nobis suscipit. Mollitia quod asperiores, ea distinctio maxime nesciunt! Possimus, a temporibus! </p>
                        </div>
                    </div>
                </div>

                <div className="akila-latest-news">
                    <LatestNews/>
                </div>
            </div>
        );
    }
}
 
export default Template;