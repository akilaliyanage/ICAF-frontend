import React from 'react';
import '../../assets/css/admin/admin.css'

function AdminNavbar(){



    return(
        <div>
            <div className="navbar">
                <a className="active" href="#"><i className="fa fa-fw fa-home"></i> Dashboard</a>
                <a href="#"><i className="fa fa-fw fa-search"></i> Home</a>
                <a href="#"><i className="fa fa-fw fa-envelope"></i> Contact</a>
                <a href="#"><i className="fa fa-fw fa-user"></i> Login</a>
            </div>
        </div>
    )
}

export default AdminNavbar;