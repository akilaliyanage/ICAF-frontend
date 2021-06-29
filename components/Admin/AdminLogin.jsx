import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import AdminNavbar from "./AdminNavBar";
import axios from "axios";
import {useHistory} from "react-router-dom";
import config from "../../config.json";

function AdminLogin(){

    const  history = useHistory();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [passwordToggle, setToggle] = useState("password");


    const toggleVisible = e => {
        if(passwordToggle === "password") {
            setToggle("text");
        }
        else {
            setToggle("password");
        }
    }

    const Login = (e) => {
        e.preventDefault();
        const admin = {
            username,
            password
        }


        //const url = config.host+"/admin/login";
        const url = "http://localhost:8000/admin/login";
        axios.post(url,admin).then((res) => {

            if(res.data.status === 200){

                localStorage.setItem("user_role",res.data.user[0].role);
                localStorage.setItem("user_name",res.data.user[0].username);
                history.push("/admin");

            }
            else {
                alert("Invalid Username or Password");

            }
        })

    }

    return(

        <div>

            <AdminNavbar/>

            <div className="uditha-add-reviewer-form">


                <h2>Login</h2>
                <form className="uditha-form-control" onSubmit={Login}>



                    <label className="description" htmlFor="element_2">Username </label>
                    <div>
                        <input style={{color:"black"}} type="text" onChange={(e) => {setUsername(e.target.value)}} className="uditha-text-control"/>
                    </div>


                    <label className="description" htmlFor="element_3">Access Key </label>
                    <div>
                        <input style={{color:"black"}} type={passwordToggle}  onChange={(e) => {setPassword(e.target.value)}} className="uditha-text-control"/>
                    </div>

                    <input type="checkBox" onClick={toggleVisible}/>
                    <label>Show Access Key &nbsp; </label>


                    <input  className="uditha-add-button" type="submit"  value="Login"/>


                </form>
            </div>
        </div>



    )
}

export default AdminLogin;
