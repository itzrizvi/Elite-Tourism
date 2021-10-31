import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import './ManageSingleOrder.css'

const ManageSingleOrder = ({ order }) => {
    // Destructuring Individual Data
    const { fullName, email, orderStatus, _id } = order;
    const { img, name, destination, duration, pernight } = order.order;

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

    // Approve Pending Status
    const handleStatusChange = id => {
        console.log(id)
        const url = `https://sheltered-bastion-99372.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Booking Updated Successfully');
                    // For Refreshing Page
                    window.location.reload();
                }
            });

    }
    return (
        <Col md={4} sm={6} xs={12} className='mb-5'>
            <div className="order-inner">
                <div className="order-img">
                    <img src={img} alt="PackageImg" className='img-fluid' />
                </div>
                <div className="details">
                    <div className="order-price">
                        <p>{pernight}</p>
                    </div>
                    <p className='destination'>{destination}</p>
                    <h2>{name}</h2>
                    <p className="duration">{duration}</p>
                    <p className="duration">Ordered By: {fullName}</p>
                    <p className="duration">Email: {email}</p>
                    <p className="duration">Order Status: {orderStatus}</p>
                    <button onClick={() => handleDelete(_id)}>Delete Order</button>
                    <button onClick={() => handleStatusChange(_id)}>Approve Order</button>

                </div>
            </div>
        </Col>
    );
};

export default ManageSingleOrder;