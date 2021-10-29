import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useForm } from '../../../../node_modules/react-hook-form/dist/index.cjs';
import './PackageDetails.css';

const PackageDetails = () => {
    // Using useParams Hook for dynamic ID
    const { packageID } = useParams();
    // Set State For Selected Service Details
    const [singlePackage, setSinglePackage] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/packages/${packageID}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSinglePackage(data));
    }, [])

    // USING HOOK FORM
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    return (
        <>
            <div className="common-banner text-center text-uppercase">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Package Overview</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="package-details-section py-5 text-start">
                <Container>
                    <Row>
                        <Col md={6} sm={6} xs={12}>
                            <div className="package-detail-img">
                                <img src={singlePackage.img} alt="PACKAGEIMAGE" />
                            </div>
                        </Col>
                        <Col md={6} sm={6} xs={12}>
                            <div className="booking-form">
                                <h2 className='text-center text-uppercase'>Book Your Trip</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("firstName", { required: true })} placeholder='First Name...' />
                                    <input {...register("lastName", { required: true })} placeholder='Last Name...' />
                                    <input {...register("address", { required: true })} placeholder='Address...' />
                                    <input type="number" {...register("phone", { required: true })} placeholder='Phone...' />
                                    <input type="submit" value="BOOK" className='booktrip-btn' />
                                </form>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="package-detail-inner mt-4">
                                <div className="package-detail-title">
                                    <h2>{singlePackage.name}</h2>
                                </div>
                                <div className="package-detail-overview">
                                    <h3>Destination: {singlePackage.destination}</h3>
                                    <h3>Trip Duration: {singlePackage.duration}</h3>
                                    <h3>Per-Night Cost: {singlePackage.pernight}</h3>
                                    <p><strong>Details:</strong><br />
                                        {singlePackage.desc}
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default PackageDetails;