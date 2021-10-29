import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaneDeparture, faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
    // Font Awesome Icons
    const safetySheild = <FontAwesomeIcon icon={faShieldAlt} />
    const planeIcon = <FontAwesomeIcon icon={faPlaneDeparture} />

    return (
        <div className='why-choose-us-section py-3'>
            <Container>
                <Row>
                    <Col md={4} sm={12} xs={12}>
                        <div className="whychoose-img">
                            <img className='img-fluid' src="https://i.ibb.co/gTMKvBR/whychoose02.jpg" alt="WHYCHOOSEONE" />
                        </div>
                    </Col>
                    <Col md={8} sm={12} xs={12}>
                        <div className="why-choose-details">
                            <div className="why-title">
                                <p>BEST AGENCY</p>
                                <h2>Why Choose <span>Elite Tourism</span></h2>
                            </div>
                            <div className="why-desc">
                                <p>Our agency’s major role is to perform as a representative. Promoting travel goods and services on behalf of a dealer.
                                    Therefore, similar to other retail industries, they don’t have a stock in stores.
                                    A holiday pack or a ticket is not obtained from a dealer till a consumer desires that purchase.</p>

                                <p>The holiday or ticket is providing to them at money off offer. The revenue is consequently the variation among the marketing cost which the consumer pays and the discounted cost at which it is offered to the agent.</p>
                            </div>
                            <div className="why-icon-box">
                                <Row>
                                    <Col md={6} sm={12} xs={12}>
                                        <p className="icon">{safetySheild}</p>
                                        <h2>Trust & Safety</h2>
                                        <p className="detail">All our cars come from main dealers and go through rigorous checks and tests before they arrive at your door</p>
                                    </Col>
                                    <Col md={6} sm={12} xs={12}>
                                        <p className="icon">{planeIcon}</p>
                                        <h2>Attractive Packages</h2>
                                        <p className="detail">We have a lot of attractive packages and we maintain a lot of facilities with these packages to our customers</p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default WhyChooseUs;