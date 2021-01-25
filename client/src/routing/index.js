import React from "react"
import { Switch, Route, useHistory } from "react-router-dom"
import { Auth0Provider } from "@auth0/auth0-react";
import { ProtectedRoute, Header } from "./../components";


import { Profile, HelloWorld } from "./../views"

const Routing = () => {

    const history = useHistory()

    const onRedirectCallback = () => {
        history.push("/profile")
    }
    
    return (
        <Auth0Provider
            domain="dev-eqjie6wk.eu.auth0.com"
            clientId="rhaSTRjVlOJyGmNx6RpphxcT4pQZoH5R"
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}>
            <Header />
            <Switch>
                <ProtectedRoute exact path={"/"} component={Profile} />
                <ProtectedRoute path={"/profile"} component={Profile} />
                <Route path={"/helloworld"} component={HelloWorld} />
            </Switch>
        </Auth0Provider>
    )
}

export default Routing;