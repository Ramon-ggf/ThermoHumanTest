import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { Login, Profile } from "./../views"
import AuthGuard from "./../guards";

class Routing extends React.Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route path={"/login"} component={Login} />
                    <AuthGuard>
                        <Route path={"/profile"} component={Profile} />
                    </AuthGuard>
                </Switch>
            </Router>
        )
    }
}

export default Routing;