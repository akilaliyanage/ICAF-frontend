import React, {useEffect, useState} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";
import config from "../../../config.json";
import { BsFolderFill } from 'react-icons/bs';


function ResearchCountCard(){

    const [count,setCount] = useState(0);

    useEffect(() => {
        const url = config.host+"event-update/research";
        axios.get(url).then((res) => {
            setCount(res.data.count);
        });
    })

    return(

        <div>

            <div className="uditha-small-card research-align">

                <div className="smallcard-text-align">
                    <h3 style={{color:"white"}}>Research</h3>
                    <h2 style={{color:"white"}}>{count}</h2>
                    <div className="uditha-icon">
                        < BsFolderFill/>
                    </div>
                </div>

            </div>


        </div>

    )
}

export default ResearchCountCard;