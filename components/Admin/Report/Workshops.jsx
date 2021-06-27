import React,{useState,useEffect} from "react";
import '../../../assets/css/admin/admin.css'
import axios from "axios";

function Workshops(){

    const [data,setData] = useState([]);

    useEffect(() => {

        const url = "http://test-1313167560.us-east-1.elb.amazonaws.com:8000/wShop/";
        axios.get(url).then((res) => {

            setData(res.data);

        })

    })

    return(
        <div>

            <table className="table table-success table-striped center" style={{width:'60%'}}>
            <thead>
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Conductor</th>
                <th scope="col">Status</th>
            </tr>
            </thead>
            {
                data.map((workshop) =>
                    <tbody>
                    <tr>
                        <td>{workshop.title}</td>
                        <td>{workshop.conductor}</td>
                        <td>{workshop.aproveStatus}</td>
                    </tr>
                    </tbody>

                )}
        </table>
        </div>
    )

}

export default Workshops;