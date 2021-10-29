import React from 'react';
import Banner from '../Banner/Banner';
import Packages from '../Packages/Packages';
import WhyChooseUs from '../WhyChoose/WhyChooseUs';

// Home Container Page
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <WhyChooseUs></WhyChooseUs>
            <Packages></Packages>
        </>
    );
};

export default Home;