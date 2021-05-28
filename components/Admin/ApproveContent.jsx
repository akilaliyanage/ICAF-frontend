import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import '../../assets/css/admin/approve.css'
import axios from "axios";
import ApproveTitle from "./ApproveTitle";
import ApproveDate from "./ApproveDate";
import ApproveAbout from "./ApproveAbout";

function ApproveContent(){



    useEffect( () => {

        document.body.style.backgroundColor = "#282c34"

    })


    return(

        <div >
            <ApproveTitle/>
            <ApproveDate/>
            <ApproveAbout/>

        </div>

    )
}

export default ApproveContent;