import React from "react"

import { Container, Row, Col } from "react-bootstrap"
import { useAuth0 } from "@auth0/auth0-react"

import { ProfileForm } from "./../../components"


const Profile = () => {
  
  const { user } = useAuth0();

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <ProfileForm {...user} />
        </Col>
      </Row>
    </Container >
  )
}

export default Profile;