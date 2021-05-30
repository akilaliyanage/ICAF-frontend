import React,{useEffect,useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/admin/admin.css'
import '../../assets/css/admin/approve.css'
import axios from "axios";
import ApproveTitle from "./ApproveContent/ApproveTitle";
import ApproveDate from "./ApproveContent/ApproveDate";
import ApproveAbout from "./ApproveContent/ApproveAbout";
import AdminNavbar from "./AdminNavBar";

function AdminApprove(){



    useEffect( () => {

        document.body.style.backgroundColor = "#282c34"

    })


    return(

        <div>
            <AdminNavbar/>
        <div className= "uditha-approve-section">

             <ApproveTitle/>
             <br/>
             <ApproveDate/>
            <br/>
             <ApproveAbout/>

        </div>
        </div>

    )
}

export default AdminApprove;