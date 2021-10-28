import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faEnvelope } from '@fortawesome/free-solid-svg-icons'

// Header Component
const Header = () => {
    // FontAwesome Icons
    const clockIcon = <FontAwesomeIcon icon={faClock} />;
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />;

    // Active Style for Menu
    const activeLink = {
        borderBottom: '1px solid #2e2e2e',
        color: "#c29d59"
    }
    return (
        <>
            <header className='head-main'>
                <div className="top-bar">
                    <Container>
                        <Row>
                            <Col md={8} sm={12} xs={12}>
                                <div className="top-bar-left-inner">
                                    <ul className="schedule-list d-flex">
                                        <li><span>{clockIcon}</span> Mon - Sat: 9.30am To 10.00pm</li>
                                        <li><span>{envIcon}</span> elite@tourism.com</li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4} sm={12} xs={12}>
                                <div className="top-bar-right-inner">
                                    <Link to='/login'>Login</Link>
                                    <Link to='/signup' className='before-effect'>Signup</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="nav-menu-area">
                    <Container>
                        <div className="menu-inner">
                            <Row>
                                <Navbar variant="light" collapseOnSelect expand="md">
                                    <Navbar.Brand as={Link} to="/home">
                                        <div className="logo">
                                            <h2><span>Elite</span> Tourism</h2>
                                        </div>
                                    </Navbar.Brand>
                                    <Navbar.Toggle />
                                    <Navbar.Collapse className='justify-content-end nav-menu'>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/home">Home</Nav.Link>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/about">About</Nav.Link>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/packages">Packages</Nav.Link>
                                        <Nav.Link activeStyle={activeLink} as={NavLink} to="/contact">Contact</Nav.Link>
                                    </Navbar.Collapse>
                                </Navbar>
                            </Row>
                        </div>
                    </Container>
                </div>
            </header>
        </>
    );
};

export default Header;