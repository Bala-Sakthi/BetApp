import React, { useState } from "react";
import { Navbar, Nav} from "react-bootstrap";
import Logo3 from "../../src/assets/images/header.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
function Header() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [toggleIcon, setToggleIcon] = useState(faBars);
  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
    setToggleIcon(isCollapsed ? faTimes : faBars);
  };
  return (
    <Navbar
      style={{ backgroundColor: "whitesmoke" }}
      collapseOnSelect
      expand="lg"
      variant="light"
      fixed="top"
      className="shadow navcustom"
    >
      <div className="container">
        {/* Begin Logo */}
        <Navbar.Brand href="/" className="">
          <img
            src={Logo3}
            alt="TrainsOnWheels"
            className="img-fluid"
            style={{ maxWidth: "150px", height: "auto" }}
          />
        </Navbar.Brand>
        {/* End Logo */}
        <Navbar.Toggle
          aria-controls="basic-navbar-nav responsive-navbar-nav"
          onClick={handleToggleCollapse}
          style={{ color: "white" }}
        >
          <FontAwesomeIcon icon={toggleIcon} style={{ color: "black" }} />
        </Navbar.Toggle>
        {/* Begin Menu */}
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="custom-navbar-collapse justify-content-end"
        >
          <Nav className="">
           
            {/* <Nav.Link
              className="nav-link"
              href="/"
              style={{ color: "#6B78B7", fontSize: "18px" }}
            >
              Home
            </Nav.Link> */}
            <Nav.Link
              className="nav-link"
              href="/about-us"
              style={{ color: "#6B78B7", fontSize: "18px" }}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="nav-link"
              href="/faq"
              style={{ color: "#6B78B7", fontSize: "18px" }}
            >
              FAQ
            </Nav.Link>
            {/* <Nav.Link href="/advertisement">Advertise</Nav.Link>
  <NavDropdown title="More Feature" id="basic-nav-dropdown">
    <NavDropdown.Item href="/fare">Fare Calculator</NavDropdown.Item>
    <NavDropdown.Item href="/fare-comparison">Fare Comparsion</NavDropdown.Item>
    <NavDropdown.Item href="/seat-availability">Seat Availblity</NavDropdown.Item>
  </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
        {/* End Menu */}
      </div>
    </Navbar>
  );
}
export default Header;
