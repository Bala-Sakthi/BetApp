import React, { useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo3 from "../../assets/images/headerlogo.png";
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
  className="custom-navbar shadow navcustom"
  style={{ backgroundColor: "whitesmoke" }}
  collapseOnSelect
  expand="lg"
  variant="light"
  fixed="top"
>
  <div className="container">
    {/* Begin Logo */}
    <Navbar.Brand href="#" className="">
      <img
        src={Logo3}
        alt="TrainsOnWheels"
        className="img-fluid"
        style={{ width: "auto", height: "auto",marginLeft:"30px" }}
      />
    </Navbar.Brand>
    {/* End Logo */}
    <Navbar.Toggle
      aria-controls="basic-navbar-nav responsive-navbar-nav"
      onClick={handleToggleCollapse}
      style={{ marginRight: "15px", color: "white" }}
    >
      <FontAwesomeIcon icon={toggleIcon} style={{ color: "black" }} />
    </Navbar.Toggle>
    {/* Begin Menu */}
    <Navbar.Collapse
      id="responsive-navbar-nav"
      className="custom-navbar-collapse"
    >
      {/* <Nav className="ml-auto">
        <Nav.Link href="/pnr-status">PNR Status</Nav.Link>
        <Nav.Link href="/coach-position">Coach Position</Nav.Link>
        <Nav.Link href="/live-train">Live Train</Nav.Link>
        <Nav.Link href="/advertisement">Advertisement</Nav.Link>
        <NavDropdown title="More Features" id="basic-nav-dropdown">
          <NavDropdown.Item href="/fare">Fare Calculator</NavDropdown.Item>
          <NavDropdown.Item href="/fare-comparison">
            Fare Comparison
          </NavDropdown.Item>
          <NavDropdown.Item href="/seat-availability">
            Seat Availability
          </NavDropdown.Item>
        </NavDropdown>
      </Nav> */}
    </Navbar.Collapse>
    {/* End Menu */}
  </div>
</Navbar>

  );
}
export default Header;