import React,{useState,useEffect} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";
import {Link} from "react-router-dom";

function ReviewersCard(props){


    const [reviewData,setReviewers] = useState([]);


    useEffect(() => {
        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/reviewer/";
        axios.get(url).then((res) => {

            setReviewers(res.data);
            console.log(res.data);
        }).catch((err) => {
            console.log(err);
        })

    },[]);


    return(

        <div className="uditha-card uditha-reviewer-card-align">

        <div className="uditha-reviewers">

            <h4 style={{color:"white"}}>Current Reviewers</h4>
            <div className="uditha-reviewer-button-align">
            <button onClick={e =>  window.location.href='/add-reviewer'} className="button-add-reviewer">Add new</button>
            </div>
            <br/>
            {
                reviewData.map((reviewer) =>

                    <div>

                        <table style={{padding:"5px",borderSpacing:"1px",tableLayout:"fixed",width:"400px"}}>
                            <tr>

                                <th><img src={"http://localhost:8000/"+reviewer.profileImage} width="70" height="70" style={{"border-radius": "50%"}}/> </th>
                                <td style={{color:"white"}}>{reviewer.name}</td>

                                <Link to ={`update-reviewer/${reviewer._id}`}>
                                <td><img style={{marginTop:"25px"}} src="https://cdn1.iconfinder.com/data/icons/hawcons/32/699302-icon-32-clipboard-edit-512.png" width="25" height="25"/></td>
                                </Link>
                            </tr>

                        </table>





                    </div>


            )
            }



        </div>

        </div>

)
}

export default ReviewersCard;