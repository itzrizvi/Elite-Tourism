import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeEurope, faMapMarkedAlt, faStar } from '@fortawesome/free-solid-svg-icons';
import './Counter.css';
import { Link } from 'react-router-dom';

const Counter = () => {
    // FontAwesome Icons
    const mapIcon = <FontAwesomeIcon icon={faMapMarkedAlt} />;
    const globIcon = <FontAwesomeIcon icon={faGlobeEurope} />;
    const starIcon = <FontAwesomeIcon icon={faStar} />;
    return (
        <div className='counter-section text-center'>
            <Container>
                <Row>
                    <Col md={4} sm={4} xs={12}>
                        <div className="counter-inner">
                            <p className="counter-icon">{mapIcon}</p>
                            <h4>Total Travel</h4>
                            <h1>1K+</h1>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={12}>
                        <div className="counter-inner">
                            <p className="counter-icon">{globIcon}</p>
                            <h4>Travel Country</h4>
                            <h1>30</h1>
                        </div>
                    </Col>
                    <Col md={4} sm={4} xs={12}>
                        <div className="counter-inner">
                            <p className="counter-icon">{starIcon}</p>
                            <h4>Five Star Rating</h4>
                            <h1>200+</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <p className="counter-detail mt-5">We traveled almost 30+ countries with 100% customer satisfaction, <br />
                            and we will be maintain our this kind of reputation to the tourism industry.</p>
                        <button className="counter-detail-btn">
                            <Link to="/contact">Contact Us</Link>
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counter;