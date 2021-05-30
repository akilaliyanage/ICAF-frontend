import React, {useEffect, useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";

function MainCardDate(){

    const [date,setDate] = useState();


    useEffect(() => {

        const url = "http://localhost:8000/event-date/";
        axios.get(url).then((res) => {
            setDate(res.data.date);
        }).catch((err) => {
            console.log(err);
        })

    })



    return(


        <div className="uditha-main-card-title">


            <h3>{date}</h3>

        </div>



    )
}

export default MainCardDate;