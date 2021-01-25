import { Link } from "react-router-dom"
import { Navbar, Nav } from "react-bootstrap"

const NavMenu = () => {
    return (
        <Navbar className="navbar" collapseOnSelect expand="md" bg="dark" variant="dark">
             <Link to={"/"} style={{ textDecoration: "none", color: "#7B698C", fontWeight: 600, border: "2px solid", padding: 10}}>
            <Navbar.Brand >Thermo Human Test</Navbar.Brand>
            </Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Link to={"/profile"} style={{ textDecoration: "none", color: "#F6F5F5"}}>
                        <Nav.Link as="div">User profile</Nav.Link>
                    </Link>
                    <Link to={"/helloworld"} style={{ textDecoration: "none", color: "#F6F5F5"}}>
                        <Nav.Link as="div"> Hello World </Nav.Link>
                    </Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavMenu;