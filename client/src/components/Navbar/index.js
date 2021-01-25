import { Link } from "react-router-dom"
import {Navbar, Nav} from "react-bootstrap"

const NavMenu = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Link to={"/profile"} className="navbrand">Thermo Human Test</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Link to={"/profile"} className="navlink">User profile</Link>
                    <Link to={"/helloworld"} className="navlink">Hello World</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;