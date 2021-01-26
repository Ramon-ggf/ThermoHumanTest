import React from "react"

import { useAuth0 } from "@auth0/auth0-react"

import { Button } from "react-bootstrap"

const LogoutButton = () => {

  const { logout } = useAuth0()

  const handleClick = () => logout({ returnTo: window.location.origin })

  return (
    <Button style={{ backgroundColor: "#7B698C", borderColor: "#7B698C" }} size="lg" onClick={handleClick}>Log Out</Button>
  )
}

export default LogoutButton