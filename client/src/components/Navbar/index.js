import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

import Logo from "./logo-thermo.png"

const NavMenu = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark">
            <Link to={"/"} style={{ padding: 10, color: "#7B698C", border: "2px solid", textDecoration: "none", fontWeight: 600 }}>
                <Navbar.Brand >
                    <img
                        alt="Logotipo"
                        src={Logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}Thermo Human Test
                </Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to={"/profile"} style={{ color: "#F6F5F5", textDecoration: "none" }}>
                        <Nav.Link as="div">User profile</Nav.Link>
                    </Link>
                    <Link to={"/helloworld"} style={{ color: "#F6F5F5", textDecoration: "none" }}>
                        <Nav.Link as="div"> Hello World </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu