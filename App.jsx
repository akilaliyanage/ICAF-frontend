import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <PostsHolder />
                    </Route>
                </Switch>
            </Router>
        );
    }
}