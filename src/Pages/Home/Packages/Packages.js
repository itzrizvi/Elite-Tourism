import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Package from '../Package/Package';
import './Packages.css';

const Packages = () => {
    const [packages, setPackages] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/packages')
            .then(res => res.json())
            .then(data => setPackages(data));
    }, []);

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
                            key={eachPackage.key}
                            eachPackage={eachPackage}></Package>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Packages;