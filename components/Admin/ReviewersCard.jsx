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
            <h3>Reviewers</h3>
            <br/>

            {
                reviewers.map((reviewer) =>
                    <div>


                        <table style={{padding:"5px",borderSpacing:"5px"}}>
                            <tr>

                                <th><img src={reviewer.picture} width="70" height="70" style={{"border-radius": "50%"}}/> </th>
                                <th>{reviewer.name}</th>

                            </tr>

                        </table>



                    </div>


            )
            }



        </div>
            <button onClick={e =>  window.location.href='/add-reviewer'} className="button-add-reviewer">+</button>
        </div>

)
}

export default ReviewersCard;