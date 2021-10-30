// import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import usePackages from '../../../hooks/usePackages';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    // Using usePackages hook for Getting Data
    const { packages } = usePackages({});

    return (
        <div className='packages-section pt-4 pb-5'>
            <Container>
                <Row>
                    <Col md={12} sm={12} xs={12}>
                        <div className="section-title text-center text-uppercase mt-4">
                            <h2>Our Packages</h2>
                        </div>
                    </Col>
                </Row>
                <Row>
                    {
                        packages.map(eachPackage => <Package
                            key={eachPackage._id}
                            eachPackage={eachPackage}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;