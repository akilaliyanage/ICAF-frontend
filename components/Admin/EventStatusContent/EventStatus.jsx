import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";


function EventStatus(){

    const [workshopLimit,setWorkshopLimit] = useState();
    const [researchLimit,setResearchLimit] = useState();

    useEffect(() => {

        const url = "http://localhost:8000/event-update";
        axios.get(url).then((res) => {

            setWorkshopLimit(res.data[0].ResearchLimit);
            setResearchLimit(res.data[0].WorkshopLimit);

        })

    })


    return(

        <div>
            <div className="card bg-dark mb-3">
                <img className="card-img-top" src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" alt="Card image cap"/>
                    <div className="card-body">


                            <p>Workshops<span className="pull-right">
                        <button type="button" style={{marginLeft:"10%",width:"40%"}} className="btn btn-primary">{workshopLimit}</button></span></p>


                        <p>Research<span className="pull-right">
                        <button type="button" style={{marginLeft:"16%", width:"40%"}} className="btn btn-primary">{researchLimit}</button></span></p>
                    </div>
            </div>
        </div>

    )

}

export default EventStatus;