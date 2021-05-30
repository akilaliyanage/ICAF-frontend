import React,{useEffect,useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";

function ApproveTitle(){

    const [title,setTitle] = useState();



    useEffect( () => {

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data.filter(function(item){
                return item.cacheName === "eventTopic";
            });
            setTitle(result[0].data.topic);
        }).catch((err) => {
            console.log(err);
        })

    })


    const ApproveTitle = () => {

        const newTitle = {
            title
        }

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";

        axios.put(url,newTitle).then((res) => {

            console.log(res.data);


        }).catch((err) => {
            console.log(err);
        })
    }



    return(

        <div>
            <div className="card w-50">
                <div className="card-body">
                    <h5 className="card-title">Topic</h5>
                    <p className="card-text">{title}</p>
                    <a href="#" className="btn btn-primary">Approve</a>
                    &nbsp;
                    <a href="#" className="btn btn-danger">Decline</a>
                </div>
            </div>

        </div>

    )
}

export default ApproveTitle;