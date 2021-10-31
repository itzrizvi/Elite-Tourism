import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Booking from '../Booking/Booking';
import './MyBookings.css';

const MyBookings = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useAuth();
    const { uid } = user;
    useEffect(() => {
        fetch(`https://sheltered-bastion-99372.herokuapp.com/orders/${uid}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [uid]);
    return (
        <>
            <div className="common-banner text-center text-uppercase">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>Your Orders</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="individual-orders-section py-5">
                <Container>
                    <Row>
                        {
                            orders.map(order => <Booking
                                key={order._id}
                                order={order}
                                individualOrders={order.order}></Booking>)
                        }
                    </Row>
                </Container>
            </div>

        </>
    );
};

export default MyBookings;