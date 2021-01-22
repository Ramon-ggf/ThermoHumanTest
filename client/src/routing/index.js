import React from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";

import { Login, Profile } from "./../views"
import AuthGuard from "./../guards";

const Routing = () => {

    const history = useHistory()

    const onRedirectCallback = appState => {
        history.push("/profile")
    }
    return (

        <Auth0Provider
            domain="dev-eqjie6wk.eu.auth0.com"
            clientId="rhaSTRjVlOJyGmNx6RpphxcT4pQZoH5R"
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
        >
            <Switch>
                <Route path={"/login"} component={Login} />


                <Route path={"/profile"} component={Profile} />

            </Switch>
        </Auth0Provider>

    )
}

export default Routing;