import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Template from './components/landing_page/Template'
import AdminDashboard from "./components/Admin/Base";
import WorkshopTemplate from './components/workshopDetails/WorkshopTemplate'
import AddReviewer from "./components/Admin/AddReviewer";
import WorkshopDashboard from './components/workshop_dashboard/WorkshpDTemp'
import ReviewerLogin from './components/workshop_dashboard/Reviewer_login'

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
                    <Route exact path="/reviewerLogin">
                        <ReviewerLogin/>
                    </Route>

                </Switch>
            </Router>
        );
    }
}