import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
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

        <div className="uditha-approve-card uditha-title-approve-align">
            <div className="uditha-approve-title">

                    <h3>{title}</h3>
                    <br/>

                    <button className="button-uditha-approve">Approve</button>
                    <button className="button-uditha-decline">Decline</button>


            </div>


        </div>

    )
}

export default ApproveTitle;