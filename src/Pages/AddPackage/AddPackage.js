import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from '../../../node_modules/react-hook-form/dist/index.cjs';
import './AddPackage.css';

const AddPackage = () => {
    // Using Hook Form
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/packages/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('A New Package Has Been Added Successfully!!');
                    reset();
                }
            })
    }
    return (
        <>
            <div className="common-banner text-center text-uppercase">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Add New Package</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="add-package-form-section py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="add-pack-form-inner">
                                <h2 className='text-center'>NEW SERVICE FORM</h2>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <input {...register("name")} placeholder='Package name...' required />
                                    <input {...register("destination")} placeholder='Package destination...' required />
                                    <input {...register("pernight")} placeholder='Pernight cost...' required />
                                    <input {...register("duration")} placeholder='Trip Duration...' required />
                                    <input {...register("img")} placeholder='Valid img url (465*304)...' required />
                                    <textarea {...register("desc")} placeholder='Package desc...' />
                                    <input type="submit" value="Add Package" className='add-package-btn' required />
                                </form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default AddPackage;