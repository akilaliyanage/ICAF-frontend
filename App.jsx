import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Template from './components/landing_page/Template'

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
                </Switch>
            </Router>
        );
    }
}