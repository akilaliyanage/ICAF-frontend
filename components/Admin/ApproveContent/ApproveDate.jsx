import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";


function ApproveDate(){

        const [date,setDate] = useState();
        const [cacheName,setCacheName] = useState();
        const [editID,setEditID] = useState();

        const [visible,setVisible] = useState("");




        useEffect( () => {

            const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";
            axios.get(url).then((res) => {
                const result = res.data.filter(function(item){
                    return item.cacheName === "eventDate";
                });

                console.log(result);
                if(result.length === 0){
                    setVisible("none");
                }
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

        <div style={{display:visible }}>
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Date</h5>
                    <p className="card-text">{date}</p>
                    <a href="#" className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveDate;