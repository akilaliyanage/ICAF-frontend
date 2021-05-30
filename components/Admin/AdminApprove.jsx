import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import '../../assets/css/admin/approve.css'
import axios from "axios";
import ApproveTitle from "./ApproveContent/ApproveTitle";
import ApproveDate from "./ApproveContent/ApproveDate";
import ApproveAbout from "./ApproveContent/ApproveAbout";

function AdminApprove(){



    useEffect( () => {

        document.body.style.backgroundColor = "#282c34"

    })


    return(

        <div className= "uditha-approve-section">

             <ApproveTitle/>
             <br/>
             <ApproveDate/>
            <br/>
             <ApproveAbout/>



        </div>

    )
}

export default AdminApprove;