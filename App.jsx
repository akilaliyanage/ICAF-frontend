import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Template from './components/landing_page/Template'
import 'antd/dist/antd.css'
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
import UserSkeliton from './components/normalUser/UserSkeliton'
import AdminApprove from "./components/Admin/AdminApprove";
import EditorTem from './components/Editor_admin/EditorTem'
import EventLimitUpdate from "./components/Admin/EventManageContent/EventLimitUpdate";
import ResearchPaperUploadeComponant from "./components/ResearchPaper_Upload/ResearchPaperUploadeComponent";



export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Router>
                <Switch>
                <Route exact path="/">
                       <Redirect to="/home"/>
                    </Route>
                    <Route exact path="/home">
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
                        <UserSkeliton/>
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
                    <Route exact path="/Add-ResearchPaper">
                        <ResearchPaperUploadeComponant/>
                    </Route>

                    <Route path = "/update-reviewer/:ID" exact component = {UpdateReviewer}/>

                    <Route path = "/manage-workshop" exact component = {EventLimitUpdate}/>


                </Switch>
            </Router>
        );
    }
}