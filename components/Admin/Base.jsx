import React from "react";
import ReviewersCard from "./ReviewersCard";
import UpperCard from "./UpperCardView";
import ConfDetails from "./ConfDetailsCard";
import MainCard from "./MainCard";
import AdminNavbar from "./AdminNavBar";


function AdminDashboard(){

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