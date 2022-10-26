import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.css';

import logo from '../images/logo.png';
import controls from '../images/controls.png';
import filter from '../images/filter.png';
import frame from '../images/frame.png';
import search from '../images/search.png';

export function Header() {

  return (
    <div>
      {['xxl'].map((expand) => (
        <Navbar key={expand} bg="white" expand={expand} style={{ height: "56px", borderBottom: "1px solid #f6f9fb" }} >
          <Container fluid>
            <Navbar.Brand href="#">

              <div className={styles.logo}>
                <img src={logo}></img>
              </div>


            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>

                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3">





                  <div className={styles.optionsMenu}>
                    <ul >
                      <li>
                        <img src={search}></img>
                        <input value="Search" />
                      </li>
                      <li><img src={controls}></img></li>
                      <li><img src={filter}></img></li>

                    </ul>
                  </div>


                </Nav>
                <Nav className="justify-content-end flex-grow-1 pe-3">



                  <img className={styles.img} src={frame}></img>




                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}






    </div >

  );
}
