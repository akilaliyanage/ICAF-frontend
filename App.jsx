import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Template from './components/landing_page/Template'
import AdminDashboard from "./components/Admin/Base";
import WorkshopTemplate from './components/workshopDetails/WorkshopTemplate'
import AddReviewer from "./components/Admin/AddReviewer";
import WorkshopDashboard from './components/workshop_dashboard/WorkshpDTemp'
import ResearcherRegistration from './components/ResearcherRegistration/Registration'
import ReviewerLogin from './components/workshop_dashboard/ReviewLogin'
import UpdateReviewer from "./components/Admin/UpdateReviewer";
import ReviewLogin from './components/workshop_dashboard/ReviewLogin'
import WorkCordinaorReg from './components/workshopDetails/WorkCordinatorReg'
import PayTemplate from './components/PaymentPage/PayTemplate'
import ConductorDTemp from './components/ConductorDashboard/ConductorDTemp'
import UserReg from './components/normalUser/UserReg'
import AdminApprove from "./components/Admin/AdminApprove";
import EditorTem from './components/Editor_admin/EditorTem'



export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Template />
                    </Route>
                    <Route exact path="/admin">
                        <AdminDashboard />
                    </Route>
                    <Route exact path="/Workshops">
                        <WorkshopTemplate />
                    </Route>
                    <Route exact path="/add-reviewer">
                        <AddReviewer/>
                    </Route>
                    <Route exact path="/workshopDash">
                        <WorkshopDashboard/>
                    </Route>
                    <Route exact path="/ResearcherRegistration">
                        <ResearcherRegistration/>
                    </Route>
                    <Route exact path="/reviewLogin">
                        <ReviewLogin/>
                    </Route>
                    <Route exact path="/workCordinaorReg">
                        <WorkCordinaorReg/>
                    </Route>
                    <Route exact path="/payment">
                        <PayTemplate/>
                    </Route>
                    <Route exact path="/userReg">
                        <UserReg/>
                    </Route>

                    <Route exact path="/condDash">
                        <ConductorDTemp/>
                    </Route>

                    <Route exact path="/approve">
                        <AdminApprove/>
                    </Route>
                    <Route exact path="/edi-admin">
                        <EditorTem/>
                    </Route>
         
                    {/*<Route exact path="/update-reviewer/:ID">*/}
                    {/*    <UpdateReviewer/>*/}
                    {/*</Route>*/}
                    <Route path = "/update-reviewer/:ID" exact component = {UpdateReviewer}/>


                </Switch>
            </Router>
        );
    }
}