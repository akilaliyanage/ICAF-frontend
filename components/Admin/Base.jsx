import React,{useEffect} from "react";
import '../../assets/css/admin/admin.css'
import ReviewersCard from "./ReviewersCard";
import UpperCard from "./UpperCardView";
import ConfDetails from "./ConfDetailsCard";
import MainCard from "./MainCard";
import AdminNavbar from "./AdminNavBar";



function AdminDashboard(){

    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"
    })

    return(

        <div>
            <AdminNavbar/>
            <ReviewersCard/>
            <ConfDetails/>
            <UpperCard/>
            <MainCard/>
        </div>

    )
}

export default AdminDashboard;