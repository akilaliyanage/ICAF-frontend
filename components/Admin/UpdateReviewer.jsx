import React,{useEffect,useState} from "react";
import '../../assets/css/admin/admin.css'
import axios from "axios";
import AdminNavbar from "./AdminNavBar";

function UpdateReviewer(props){

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [picture, setPicture] = useState();
    const [password, setPassword] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const [preview, setPreview] = useState();
    const [reviewer,setReviewer] = useState([]);
    const [passwordToggle, setToggle] = useState("password");

    const rid = props.match.params.ID;



    useEffect(()=> {
        document.body.style.backgroundColor = "#282c34"

        const url = "http://localhost:8000/reviewer/"+ rid;
        axios.get(url).then((res) => {

            setReviewer(res.data);
            console.log(res.data);

        }).catch((err) => {
            console.log(err);
        })

        if (!selectedFile) {
            setPreview(undefined)
            return
        }

        const objectUrl = URL.createObjectURL(selectedFile)
        setPreview(objectUrl)

        return () => URL.revokeObjectURL(objectUrl)
    },[selectedFile]);

    const onSelectFile = e => {
        if (!e.target.files || e.target.files.length === 0) {
            setSelectedFile(undefined)
            return
        }

        setSelectedFile(e.target.files[0])
        setPicture(e.target.files[0])
    }

    const toggleVisible = e => {
        if(passwordToggle === "password") {
            setToggle("text");
        }
        else {
            setToggle("password");
        }
    }

    const UpdateReviewer = (e) => {
        e.preventDefault();
        const reviewer = {
            name,
            username,
            password,
            picture
        }

        console.log(reviewer);

    }

    return(

        <div>


            <AdminNavbar/>
            {
                reviewer.map((reviewer) =>

            <div className="uditha-add-reviewer-form">
                <div className="uditha-avatarInput">
                    <div className="form-group">
                        <input type="file" className="uditha-file-control"  onChange={onSelectFile} name="picture" id="exampleFormControlFile1"/>
                    </div>
                </div>

                <h2>Update Reviewer</h2>

                <div className="uditha-old-avatar-Preview">
                    <img style={{borderRadius:'50%'}} src={"http://localhost:8000/"+reviewer.profileImage} width="200" height="200" alt="avatar"/>
                </div>

                <div className="uditha-avatar-Preview">
                    {selectedFile &&  <img style={{borderRadius:'50%'}} src={preview} width="200" height="200" alt="avatar"/>}
                </div>


                <form className="uditha-form-control" onSubmit={UpdateReviewer}>

                    <label className="description" htmlFor="element_1">Name </label>
                    <div>
                        <input type="text"
                               defaultValue={reviewer.name} onChange={(e) => {setName(e.target.value)}} className="uditha-text-control"/>
                    </div>

                    <label className="description" htmlFor="element_2">Username </label>
                    <div>
                        <input type="text"
                               defaultValue={reviewer.username} onChange={(e) => {setUsername(e.target.value)}} className="uditha-text-control"/>
                    </div>


                    <label className="description" htmlFor="element_3">Access Key </label>
                    <div>
                        <input type={passwordToggle}
                               defaultValue={reviewer.password} onChange={(e) => {setPassword(e.target.value)}} className="uditha-text-control"/>
                    </div>

                    <input type="checkBox" onClick={toggleVisible}/>
                    <label>   Show Access Key</label>


                    <input  className="uditha-add-button" type="submit"  value="Update"/>
                    <input  className="uditha-add-button" type="submit"  value="Delete"/>


                </form>


            </div>

                )
            }

        </div>



    )
}

export default UpdateReviewer;
