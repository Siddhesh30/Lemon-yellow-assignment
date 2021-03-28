import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { GiHamburgerMenu } from "react-icons/gi";
import navImage from "../assets/images/group-2.png";
import { stack as Menu } from "react-burger-menu";
import styled from "styled-components";

const Styles = styled.div`
  /* Position and sizing of burger button */
  .bm-burger-button {
    position: relative;
    width: 25px;
    height: 20px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Color/shape of burger icon bars on hover*/
  .bm-burger-bars-hover {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /*
Sidebar wrapper styles
Note: Beware of modifying this element as it can break the animations - you should not need to touch it in most cases
*/
  .bm-menu-wrap {
    position: fixed;
    height: 100%;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #373a47;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
    padding: 0.8em;
  }

  /* Individual item */
  .bm-item {
    display: inline-block;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: #fff !important;
  }
  .bm-item {
    display: inline-block;
    color: #d1d1d1;
    margin-bottom: 10px;
    text-align: left;
    text-decoration: none;
    transition: color 0.2s;
  }

  .bm-item:hover {
    color: #ffffff;
  }
`;

function NavigationBar() {
  return (
    <>
      <Styles>
        <Navbar bg="light" expand="lg" className={"pr-5 pl-5"}>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About Us</Nav.Link>
              <Nav.Link href="#link">Service</Nav.Link>
              <Nav.Link href="#link">Contact Us</Nav.Link>
              <Nav.Link>
                <Menu right>
                  <a className="menu-item" href="/">
                    Home
                  </a>
                  <a className="menu-item" href="/salads">
                    Salads
                  </a>
                  <a className="menu-item" href="/pizzas">
                    Pizzas
                  </a>
                  <a className="menu-item" href="/desserts">
                    Desserts
                  </a>
                </Menu>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    </>
  );
}

export default NavigationBar;
