import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";

function ApproveAbout(){


    const [about,setAbout] = useState();

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

        <div>
        <div className="uditha-approve-card uditha-about-approve-align">

            <div className="uditha-approve-about">

                        <h5>{about}</h5>
                         <br/>

                <button className="button-uditha-approve">Approve</button>
                <button className="button-uditha-decline">Decline</button>
                        </div>




        </div>



        </div>

    )
}

export default ApproveAbout;