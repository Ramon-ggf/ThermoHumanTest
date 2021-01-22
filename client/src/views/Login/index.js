import React from "react"
import {LoginButton} from "./../../components"

class Login extends React.Component {
    render() {
        console.log(window.location.origin)

        return (
            <>
                <span>Login</span>
                <LoginButton/>
            </>
        )
    }
}

export default Login;