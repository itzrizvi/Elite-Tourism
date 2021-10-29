import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import teamOne from '../../images/team/member-one.jpg';
import teamTwo from '../../images/team/member-two.jpg';
import teamThree from '../../images/team/member-three.jpg';
import teamFour from '../../images/team/member-four.jpg';
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
    // Font Awesome Icons
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const twitIcon = <FontAwesomeIcon icon={faTwitter} />
    const pintrstIcon = <FontAwesomeIcon icon={faPinterest} />
    const instaIcon = <FontAwesomeIcon icon={faInstagram} />
    return (
        <>
            <div className="common-banner text-center">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>OUR TEAM</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {/* Team Area Starts */}
            <div className="team-section py-5">
                <Container>
                    <Row>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamOne} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Mr. Fernandez</h3>
                                    <p>CEO, Founder</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamTwo} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Mr. Franks</h3>
                                    <p>Co-Founder</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamThree} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Mr. D Sliva</h3>
                                    <p>IT Specialist</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md={3} sm={6} xs={12} className="mb-4">
                            <div className="team-inner">
                                <div className="team-img">
                                    <img src={teamFour} alt="TEAMIMG" />
                                </div>
                                <div className="team-details">
                                    <h3>Mr. Lukas</h3>
                                    <p>Sr. Client Counsellor</p>
                                    <div className="team-social-icons">
                                        <ul className="team-social-list d-flex">
                                            <li><Link to='/home'>{fbIcon}</Link></li>
                                            <li><Link to='/home'>{twitIcon}</Link></li>
                                            <li><Link to='/home'>{pintrstIcon}</Link></li>
                                            <li><Link to='/home'>{instaIcon}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;