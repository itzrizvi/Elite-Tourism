import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './Booking.css';

const Booking = ({ individualOrders, order }) => {
    const { name, img, pernight, destination } = individualOrders;

    // Fetching orders with state
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders/')
            .then(res => res.json())
            .then(data => setAllOrders(data));
    }, [])

    // Delete Order Function
    const handleDelete = id => {
        const proceed = window.confirm('Are You sure you want to delete this service??');
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Service Deleted Successfully!!')
                        const restOrders = allOrders.filter(order => order._id !== id);
                        setAllOrders(restOrders);
                        // Reloading window for not updating restOrders after calling it though
                        window.location.reload();
                    }
                });
        }
    }
    return (
        <Col md={12} sm={12} xs={12}>
            <Row className='mb-5'>
                <Col md={4} sm={6} xs={6}>
                    <div className="booked-img">
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                </Col>
                <Col md={8} sm={6} xs={6}>
                    <div className="booked-details">
                        <h2>{name}</h2>
                        <h3>Cost: {pernight}</h3>
                        <h3>Destination: {destination}</h3>
                        <button onClick={() => handleDelete(order._id)}>Cancel This Trip</button>
                    </div>
                </Col>

            </Row>
        </Col>
    );
};

export default Booking;