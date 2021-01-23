import React from "react"
import { Redirect } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const AuthGuard = (props) => {
    const { children } = props
    const { isAuthenticated } = useAuth0()
    console.log("AUTH GUARD isAuithenticated", isAuthenticated)

    return isAuthenticated ? (
        children
    ) : (
            <Redirect to={"/login"} />
        )
}

export default AuthGuard;