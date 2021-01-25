import LogoutButton from "./../LogoutButton"
import Navbar from "./../Navbar"
import "./header.css"

import { Jumbotron, Container } from "react-bootstrap"

const Header = () => {
    return (
        <>
            <Navbar />
            <Jumbotron fluid className="header">
                <Container>
                    <h1 style={{fontWeight: 900}}>The Thermo Human Test</h1>
                    <p>The best thermical images experience for medical, sports or therapeutical purposes.</p>
                    <LogoutButton />
                </Container>
            </Jumbotron>
        </>

    )
}

export default Header;