import React from 'react';
import '../../assets/css/admin/admin.css'

function AddReviewer(){

    return(

        <div>
            <form id="form_26057" className="appnitro" method="post" action="">
                <div className="form_description">
                    <h2>Untitled Form</h2>
                    <p>This is your form description. Click here to edit.</p>
                </div>
                <ul>

                    <li id="li_1">
                        <label className="description" htmlFor="element_1">Name </label>
                        <div>
                            <input id="element_1" name="element_1" className="element text medium" type="text"
                                   maxLength="255" value=""/>
                        </div>
                    </li>
                    <li id="li_2">
                        <label className="description" htmlFor="element_2">Username </label>
                        <div>
                            <input id="element_2" name="element_2" className="element text medium" type="text"
                                   maxLength="255" value=""/>
                        </div>
                    </li>
                    <li id="li_3">
                        <label className="description" htmlFor="element_3">Access Key </label>
                        <div>
                            <input id="element_3" name="element_3" className="element text medium" type="text"
                                   maxLength="255" value=""/>
                        </div>
                    </li>

                    <li className="buttons">
                        <input type="hidden" name="form_id" value="26057"/>

                        <input id="saveForm" className="button_text" type="submit" name="submit" value="Submit"/>
                    </li>
                </ul>
            </form>
        </div>



    )
}

export default AddReviewer;
