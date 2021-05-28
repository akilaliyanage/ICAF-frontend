import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Template from './components/landing_page/Template'
import AdminDashboard from "./components/Admin/Base";
import WorkshopTemplate from './components/workshopDetails/WorkshopTemplate'
import AddReviewer from "./components/Admin/AddReviewer";
import WorkshopDashboard from './components/workshop_dashboard/WorkshpDTemp'
import ResearcherRegistration from './components/ResearcherRegistration/Registration'
import ReviewerLogin from './components/workshop_dashboard/Reviewer_login'
import ApproveContent from "./components/Admin/ApproveContent";
import UpdateReviewer from "./components/Admin/UpdateReviewer";


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
                    <Route exact path="/workshop">
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
                    <Route exact path="/reviewerLogin">
                        <ReviewerLogin/>
                    </Route>
                    <Route exact path="/approve-content">
                        <ApproveContent/>
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