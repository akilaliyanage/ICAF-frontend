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

                if(result.length === 0){
                    setVisible("none");
                }
                setDate(result[0].data.date);
                setEditID(result[0]._id);
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

            console.log(newDate);

            const url = "http://localhost:8000/approve/date";

            axios.post(url,newDate).then((res) => {

                if(res.data.status === 200){
                    alert("Approved");
                }
                else {
                    alert("Failed")
                }


            }).catch((err) => {
                console.log(err);
            })
        }



    return(

        <div style={{display:visible }}>
            <div className="card w-50" >
                <div className="card-header">Date</div>
                <div className="card-body text-primary">
                    <h5 className="card-title">{date}</h5>
                    <br/>

                    <a href="#"  onClick={ApproveDate} className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveDate;