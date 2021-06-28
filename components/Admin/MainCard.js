import React, {useEffect, useState} from "react";
import '../../assets/css/admin/admin.css'
import MainCardTitle from "./MainCardContent/Title";
import MainCardDate from "./MainCardContent/Date";
import axios from "axios";

function Reviewers(){

    const [visible,setVisible] = useState("");
    const [result,setResult] = useState();

    useEffect( () => {

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/edi-noti";
        axios.get(url).then((res) => {
            const result = res.data;
            setResult(result);

            if(result.length === 0){
                setVisible("none");
            }


        }).catch((err) => {
            console.log(err);
        })

    })



    return(

        <div className="uditha-main-card uditha-main-card-align">
            <div className="uditha-edit-content">


           <MainCardTitle/>
                <br/>
           <MainCardDate/>

                <br/>

                <h2 style={{color:"white"}}>@</h2>
                <h1 style={{color:"white"}}>SLIIT</h1>
                <br/>
                <button style={{display:visible }} onClick={e =>  window.location.href='/approve'} className="uditha-notify-button blink">Updates are Pending</button>
                <button onClick={e =>  window.location.href='/report'} type="button" className="btn btn-info">Report</button>

            </div>

        </div>

    )
}

export default Reviewers;