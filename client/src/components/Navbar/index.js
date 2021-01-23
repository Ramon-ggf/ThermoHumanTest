import { Link } from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"

import { LogoutButton } from "./../../components"

const NavMenu = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">Thermo Human Test</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={"/profile"}>User profile</Link>
                    <Link to={"/helloworld"}>Hello World</Link>
                </Nav>
                <Nav>
                <LogoutButton/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;