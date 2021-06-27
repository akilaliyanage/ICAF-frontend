import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";


function EventStatus(){

    const [workshopLimit,setWorkshopLimit] = useState();
    const [researchLimit,setResearchLimit] = useState();
    const [workshopStatus,setWorkshopStatus] = useState('Open');
    const [researchStatus,setResearchStatus] = useState('Open');

    const[workshopStatusColor,setWorkshopStatusColor] = useState('btn btn-success');
    const[researchStatusColor,setResearchStatusColor] = useState('btn btn-success')

    useEffect(() => {

        const url = "http://localhost:8000/event-update";
        axios.get(url).then((res) => {

            setWorkshopLimit(res.data[0].WorkshopLimit);
            setResearchLimit(res.data[0].ResearchLimit);

        }).then(() => {
            const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/wShop/";
            axios.get(url).then((res) => {

                if(20 >= workshopLimit){
                    setWorkshopStatus('Closed');
                    setWorkshopStatusColor('btn btn-danger')
                }
                if (10 >= researchLimit){
                    setResearchStatus('Closed');
                    setResearchStatusColor('btn btn-danger')
                }

            })
        })

    });

    // useEffect(() => {
    //
    //     const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/wShop/";
    //     axios.get(url).then((res) => {
    //
    //         if(20 >= workshopLimit){
    //             setWorkshopStatus('Closed');
    //         }
    //         if (10 >= researchLimit){
    //             setResearchStatus('Closed');
    //         }
    //
    //     })
    //
    // })


    return(

        <div>
            <div className="card bg-dark mb-3">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="Card image cap"/>
                    <div className="card-body">


                            <h5>Workshops<span className="pull-right">
                        <button type="button" style={{marginLeft:"10%",width:"40%"}} className={workshopStatusColor}>{workshopStatus}</button></span></h5>


                        <h5>Researches<span className="pull-right">
                        <button type="button" style={{marginLeft:"11%", width:"40%"}} className={researchStatusColor}>{researchStatus}</button></span></h5>
                    </div>
            </div>
        </div>

    )

}

export default EventStatus;