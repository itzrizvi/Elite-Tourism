import React from 'react';
import { Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Packages from '../Packages/Packages';
import WhyChooseUs from '../WhyChoose/WhyChooseUs';

// Home Container Page
const Home = () => {
    // Using Spinner when Rendering Home data
    const { isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className='my-3 spinner' animation="grow" variant="info" />;
    }
    return (
        <>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Packages></Packages>
            <Counter></Counter>
        </>
    );
};

export default Home;