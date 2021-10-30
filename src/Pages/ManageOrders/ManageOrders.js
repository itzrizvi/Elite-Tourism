import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ManageSingleOrder from '../ManageSingleOrder/ManageSingleOrder';
import './ManageOrders.css';

const ManageOrders = () => {
    // Fetching orders with state
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders/')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])
    return (
        <>
            <div className="common-banner text-center text-uppercase">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Manage All Orders</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="manager-all-orders-section py-5">
                <Container>
                    <Row>
                        {
                            allOrders.map(order => <ManageSingleOrder
                                key={order._id}
                                order={order}></ManageSingleOrder>)
                        }
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default ManageOrders;