import React from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
    return (
        <>
            {/* Common Banner */}
            <div className="common-banner text-center">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>CONTACT US</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Contact Form Area */}
            <div className="contact-form-section py-5 mb-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="form-inner text-start">
                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="email" placeholder="Jhon Doe" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Your Question</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Gooler Map Area */}
            <div className="google-map-section">
                <iframe className="w-full" title="googleMap" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8437.36323034482!2d90.36919892377296!3d23.76793879941443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7543a947b03%3A0xd75e6a88605a6663!2sChandrima%20Udyan!5e0!3m2!1sen!2sbd!4v1634656946263!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen=""></iframe>
            </div>

        </>
    );
};

export default Contact;