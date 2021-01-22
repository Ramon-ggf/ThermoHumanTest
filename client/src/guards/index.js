import React from "react"
import { Redirect } from "react-router-dom"
import { useAuth0 } from '@auth0/auth0-react'

const AuthGuard = (props) => {
    console.log(props)
    const { children } = props
    const { isAuthenticated } = useAuth0()

    return isAuthenticated ? (
        children
    ) : (
            <Redirect to={"/login"} />
        )
}

export default AuthGuard;