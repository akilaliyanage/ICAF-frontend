import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";


function ApproveAbout(){

    const [about,setAbout] = useState();
    const [cacheName,setCacheName] = useState();
    const [editID,setEditID] = useState();

    const [visible,setVisible] = useState("");

    useEffect( () => {

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "aboutEdit";
            });
            setAbout(result[0].data.des);
        }).catch((err) => {
            console.log(err);
        })

    })



    return(

        <div style={{display:visible }}>
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">About</h5>
                    <p className="card-text">{about}</p>
                    <a href="#" className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveAbout;