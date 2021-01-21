import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Login, Profile } from "./../views"

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/login"} component={Login} />
                    <Route path={"/profile"} component={Profile} />
                </Switch>
            </Router>
        )
    }
}

export default Routing;