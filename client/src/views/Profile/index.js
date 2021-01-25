// import React from 'react'
// import { useAuth0 } from '@auth0/auth0-react'


// const Profile = () => {
//     const { isAuthenticated } = useAuth0()
//     console.log("isAuthenticated", isAuthenticated)
//     return (
//         <span>Profile</span>
//     )
// }

// export default Profile;

//------------------------------------------------------------------------------

// import React from "react";
// import { useAuth0 } from "@auth0/auth0-react";

// const Profile = () => {
//   const { user, isAuthenticated, isLoading } = useAuth0();

//   if (isLoading) {
//     return <div>Loading ...</div>;
//   }

//   return (
//     isAuthenticated && (
//       <div>
//         <img src={user.picture} alt={user.name} />
//         <h2>{user.name}</h2>
//         <p>{user.email}</p>
//       </div>
//     )
//   );
// };

// export default Profile;

//------------------------------------------------------------------------------

import React from "react";

import { Container, Row, Col } from "react-bootstrap"
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import { ProfileForm } from "./../../components"

const Profile = () => {
  const { user } = useAuth0();

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <ProfileForm {...user}/>
        </Col>
      </Row>
    </Container >
  )
}

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <p>Loading...</p>,
})