import React from "react";
import '../../assets/css/admin/admin.css'

function ReviewersCard(){


    const reviewers = [

        {
            name:"Prof John Doe",
            picture: "https://images.unsplash.com/photo-1618077360395-f3068be8e001?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        },
        {
            name:" Dr Nancy draw",
            picture: "https://images.unsplash.com/photo-1584997159889-8bb96d0a2217?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80"
        },
        {
            name:" Dr Oliver Charles   ",
            picture: "https://images.unsplash.com/photo-1605857840732-188f2f08cb31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ]



    return(

        <div className="uditha-card uditha-reviewer-card-align">
        <div className="uditha-reviewers">

            <h3>Current Reviewers</h3>
            <button onClick={e =>  window.location.href='/add-reviewer'} className="button-add-reviewer">+</button>
            <br/>
            {
                reviewers.map((reviewer) =>
                    <div>


                        <table style={{padding:"5px",borderSpacing:"1px",tableLayout:"fixed",width:"400px"}}>
                            <tr>

                                <th><img src={reviewer.picture} width="70" height="70" style={{"border-radius": "50%"}}/> </th>
                                <td>{reviewer.name}</td>
                                <td><img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698873-icon-136-document-edit-512.png" width="20" height="20"/></td>

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