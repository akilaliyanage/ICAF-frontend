import React, { Component } from 'react'
import config from '../../config.json'

class MainTopic extends Component {
    constructor(props) {
        super(props);
        this.tick = this.tick.bind(this)
        this.fetchTopic = this.fetchTopic.bind(this)
        this.fetchEventDate = this.fetchEventDate.bind(this)
        this.state = { 
            seconds : 0,
            minutes : 0,
            hours : 0,
            days : 0,
            date : '',
            topic : '',
            subtop : '',
            datetime : '',
            venue : ''
         }
    }

    componentDidMount(){

        //fetch methods       
        this.fetchEventDate()
        this.fetchTopic()

        var now = new Date().getTime();
        var countDownDate = new Date(this.state.date).getTime();
        var timeleft = countDownDate - now;
        
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
    
        this.setState({seconds : seconds,minutes : minutes, hours : hours, days : days})
    
        this.timer = setInterval(this.tick, 1000);
    }

    fetchTopic(){
        fetch(config.host + "/topic").then(res => res.json()).then(data => {
            this.setState({topic : data[0]["topic"],venue : data[0]['venue'], subtop : data[0]['SubTopic'], datetime : data[0]['datemonth']})
        }).catch(err =>{
            alert(err)
        })
    }

    fetchEventDate(){
        fetch(config.host + "/event-date").then(res => res.json()).then(data =>{
            console.log(data)
            this.setState({date : data['date']})
        }).catch(err =>{
            //alert(err)
            console.log(err)
        })
    }

    tick(){
        var now = new Date().getTime();
        var countDownDate = new Date(this.state.date).getTime();
        var timeleft = countDownDate - now;
        
        var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);
        

        this.setState({seconds : seconds,minutes : minutes, hours : hours, days : days})
    
        if (this.state.seconds > 0) {
          //this.setState({seconds: this.state.seconds - 1})
        } else {
          //clearInterval(this.timer);
          //window.location.reload();
        }
      }
    render() { 
        return (
            <div style={{color:'white'}}>
                <h1>{this.state.topic}</h1>
                    <h2>{this.state.subtop}</h2>
                    <h3>Sri Lanka, {this.state.datetime} <span> @ {this.state.venue}</span></h3>
                    <span> <b> Join us via </b> <a href="">Ms Teams </a><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABmJLR0QA/wD/AP+gvaeTAAAD5ElEQVR4nO2bTYscVRSG3xOSiMS40KWYzASCOjEaiYYguEzEuFBxfoEh+AvEP+DXzl0y0Qhu/AVJXAoS3TkQJ18GQU0GRBeCkxGSGQcfF3U6XV1dPV23vm5nul5oqrlf5z3vPaf7VtW9UocOUw2LaRzYLemApOckzUlak/SVmS21xaEVAYDtkvZLOqjE2Wf9+2wOhw1Jr5rZN21wq10A4AklDqYdnZP0UE7zNUnXJV2RdFXSU5JOSlo0sxfr5paH0gJkwveg+k4/ltdc0q/qO7rk3382s43UmDskrUvaMLMdZbmFYKwAHr57lDh7WMlsHpD0tKRtOV3+lnTNP9clLUr60cxWixACkCQzayU9t+cQ2CfpTUnPKyx8lyRdMbPfG2PbAO4LAGyT9LGk9zQYGUj6RWPC94EHcJIEd4FzwCngqOd6mzzopUGrAC677fnWjQ/yiCbAmtve2brxQR6tCpD+Fd8pSWa23pbxzQDsAz4DloF//boAzDRlME7ojeABrJKPO8CxxgzXPnBJHo7zwEvALr9e8PIVYG8jhmsdtAIP4PyI+p4IZ0bUzwBnPWXWC6fOBAqQey8AHPH6Wzl1xz1FwlNnAgXIXX8Au73+XqZ8NuV8eOpMoADjIuC3TPnZKqkziQKMcuSi15/OlC+XTZ0Bw2PIfT+cWoVxKVAAfNaOAI/4tef8CrAn06+3kAtKnaG7wTH4L7D9AIfA9quSXvdPGnckzZvZ7Uz5n5KeVPJQ5Yec8Z7x6x/57ApEwGao2j87Dsnf2QJwm+Tv7BZwOjvzqX4L3i8odWpzoG4BSvSbof8vUDh1anMgtgDe95g7mYcVmlwHTIIA3n8vcMZTZm1c6tRpuFYBCmAZeK2qvfuPvnrkyz6MrNo/O05BLJvZ5jMbYniSIiC0HXCC/mIoPHK2gABFnO8hu4bYEgKU6pf3YmOq0AkQm0BsdALEJhAbnQCxCcRGJ0BsArExVQIAQzdqoc8EN8N3Cn/u1zbe9uvNoZq61vJV0dS9ADAH/OXN3i1tuGkU4QHYKAGAD4FXgMdJ3gwdAj6g/7b5a5LtQOGG20BBAea92U+psm8Zjy+Bh0sbbgNlQ9mj4mXgU2DRZ/wf4CbwOXC0kuG2kJqtT4AXgEeDQrmq4doGrMijdChXNVzroBV4kLzpueFhXDyUqxpuZPAJ5pHOoXUnEHWbXNtIC3DDr2/EIBIdwDseffeAL5iSrbLpN0Mm6SNJ72t4s/TYvf51oed8W9vlh4wAs5LeUqTt8tEFyIItfmCiOzJT94BUOzS1X9IpPQiHpkLANB2bCwHDByfvKjk4eTUmrw4dpgj/A9ch2EWJwogoAAAAAElFTkSuQmCC"></img></span> 

                    <div className="container">
                        <div>{this.state.days} D</div>
                        <div>{this.state.hours} H</div>  
                        <div>{this.state.minutes} M</div>
                        <div>{this.state.seconds} S</div>
                    </div>
            </div>
         );
    }
}
 
export default MainTopic;