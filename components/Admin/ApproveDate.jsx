import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";

function ApproveDate(){

    const [date,setDate] = useState();
    const [cacheName,setCacheName] = useState();
    const [editID,setEditID] = useState();




    useEffect( () => {

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "eventDate";
            });
            setDate(result[0].data.date);
        }).catch((err) => {
            console.log(err);
        })

    })


    const ApproveDate = () => {

        const newDate = {
            date,
            cacheName,
            editID
        }

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/approve";

        axios.post(url,newDate).then((res) => {

            console.log(res.data);


        }).catch((err) => {
            console.log(err);
        })
    }



    return(

        <div className="uditha-approve-card uditha-date-approve-align">
            <div className="uditha-approve-date">

                <h3>{date}</h3>
                <br/>

                    <button className="button-uditha-approve">Approve</button>
                    <button className="button-uditha-decline">Decline</button>

            </div>

        </div>

    )
}

export default ApproveDate;