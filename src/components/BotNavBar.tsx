import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import MenuIcon from "@mui/icons-material/Menu";

import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "About"];
const settings = ["Profile", "Logout"];

const NavBar: React.FC = () => {
  const [anchorElNav, setAnchorElNav] = useState<HTMLElement | null>(null);
  const [anchorElUser, setAnchorElUser] = useState<HTMLElement | null>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      sticky="top"
      className="justify-content-between"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <AdbIcon className="d-none d-md-flex me-1" />
          LOGO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto d-md-none">
            <NavDropdown title={<MenuIcon />} id="mobile-nav-dropdown">
              {pages.map((page) => (
                <NavDropdown.Item key={page} onClick={handleCloseNavMenu}>
                  {page}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <Nav className="d-none d-md-flex">
            {pages.map((page) => (
              <Nav.Link key={page} href="#">
                {page}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="ml-auto">
            <Tooltip title="Open settings">
              <Avatar alt="User Avatar" src="/static/images/avatar/2.jpg" />
            </Tooltip>
            <NavDropdown title="" id="user-menu-dropdown">
              {settings.map((setting) => (
                <NavDropdown.Item key={setting} onClick={handleCloseUserMenu}>
                  {setting}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
