import React from 'react';
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

// Footer Component
const Footer = () => {
    // Font Awesome Icons
    const addIcon = <FontAwesomeIcon icon={faMapMarker} />
    const envIcon = <FontAwesomeIcon icon={faEnvelope} />
    const phnIcon = <FontAwesomeIcon icon={faPhone} />
    return (
        <footer className='foot'>
            <div className="before-fix">
                <Container className='footer-container'>
                    <Row>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <div className="logo">
                                    <h2><span>Elite</span> Tourism</h2>
                                </div>
                            </div>
                            <div className="foot-detail-1">
                                <p>We aim to ensure that you never miss an opportunity to travel. Grab your trip ticket and have a memorable journey with Elite Tourism.</p>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Quick links</h2>
                            </div>
                            <Navbar variant="light" className="responsive-fix">
                                <Nav className="d-block foot-nav-menu">
                                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                                    <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                                </Nav>
                            </Navbar>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Our services</h2>
                            </div>
                            <ul className="foot-detail-3">
                                <li>Domestic Trip</li>
                                <li>International Trip</li>
                                <li>Trip by EMI</li>
                                <li>3 Day Package</li>
                                <li>7 Day Package</li>
                            </ul>
                        </Col>
                        <Col md={3} sm={6} xs={12} className='text-start column-gap-responsive'>
                            <div className="foot-title">
                                <h2>Contact info</h2>
                            </div>
                            <ul className="foot-detail-4">
                                <li>{addIcon} Agargaon, Taltola Bus Stand</li>
                                <li>{envIcon} info@elitetourism.com</li>
                                <li>{phnIcon} +880 - 1766- 922252</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <Row>
                        <Col md={12}>
                            <p className='copyright-txt text-center py-3'>© 2021 All Rights Reserved by Shahriar Rizvi</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;