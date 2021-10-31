import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notfoundIMG from '../../images/notfound/notfound.jpg'

const NotFound = () => {
    return (
        <>
            <div className="common-banner text-center text-uppercase">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>404 Not Found!!!</h2>
                                <Link to='/home' className='d-block details mb-5'>
                                    <button>Go Back To Home</button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="notfound-img">
                <Container fluid>
                    <img className='w-100' src={notfoundIMG} alt="NOTFOUND" />
                </Container>
            </div>
        </>
    );
};

export default NotFound;