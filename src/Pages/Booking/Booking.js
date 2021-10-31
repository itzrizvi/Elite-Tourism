import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import './Booking.css';

const Booking = ({ individualOrders, order }) => {
    const { name, img, pernight, destination } = individualOrders;

    // Fetching orders with state
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://sheltered-bastion-99372.herokuapp.com/orders/')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, []);

    // Delete Order Function
    const handleDelete = id => {
        const proceed = window.confirm('Are You sure you want to delete this Booking??');
        if (proceed) {
            fetch(`https://sheltered-bastion-99372.herokuapp.com/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Trip Deleted Successfully!!')
                        const restOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(restOrders);
                        // Reloading window for not updating restOrders after calling it though
                        window.location.reload();
                    }
                });
        }
    }

    // Using Spinner when Rendering Home data
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className='my-3 spinner' animation="grow" variant="info" />;
    }
    return (
        <Col md={12} sm={12} xs={12}>
            <Row className='mb-5'>
                <Col md={4} sm={12} xs={12}>
                    <div className="booked-img">
                        <img src={img} className='img-fluid mb-4' alt="" />
                    </div>
                </Col>
                <Col md={8} sm={12} xs={12}>
                    <div className="booked-details">
                        <h2>{name}</h2>
                        <h3>Cost: {pernight}</h3>
                        <h3>Destination: {destination}</h3>
                        <h3>Status: {order.orderStatus}</h3>
                        <button onClick={() => handleDelete(order._id)}>Cancel This Trip</button>
                    </div>
                </Col>

            </Row>
        </Col>
    );
};

export default Booking;