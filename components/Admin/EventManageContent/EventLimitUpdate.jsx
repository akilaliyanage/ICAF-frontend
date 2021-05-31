import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";



function EventLimitUpdate(){


    const [workshopLimit,setWorkshopLimit] = useState();
    const [researchLimit,setResearchLimit] = useState();
    const [visible,setVisible] = useState("");

    useEffect(() => {

        const url = "http://localhost:8000/event-update";
        axios.get(url).then((res) => {

            setWorkshopLimit(res.data[0].ResearchLimit);
            setResearchLimit(res.data[0].WorkshopLimit);

        })

    })


    const updateEvents = (e) => {
        e.preventDefault();

        const update = {
            workshopLimit,
            researchLimit
        }
        console.log(update);

        const url = "http://localhost:8000/event-update";

    axios.post(url,update).then((res) => {
        if(res.data.status === 200){
            alert("Updated")
        }
        else{
            alert("failed")
        }

        setVisible("none")
        window.location.reload();
    })

    }


    return(

        <div style={{display:visible}}>
            <div className="card" style = {{"width": "22rem"}}>
                <div className="card-body">
                    <div className="form-group">
                   <form onSubmit={updateEvents}>
                       <label>Workshops</label>
                       <input type="number"  defaultValue={workshopLimit}
                              onChange={(e) => {setWorkshopLimit(e.target.value)}} className="form-control"/>
                       <br/>
                       <label>Research</label>
                       <input type="number" defaultValue={researchLimit}
                              onChange={(e) => {setResearchLimit(e.target.value)}} className="form-control"/>
                       <br/>
                       <input className="btn btn-primary" type="submit"  value="Save"/>

                   </form>
                    </div>

                </div>
            </div>
        </div>

    )

}

export default EventLimitUpdate;