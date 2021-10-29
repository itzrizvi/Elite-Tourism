import React from 'react';
import Banner from '../Banner/Banner';
import Counter from '../Counter/Counter';
import Packages from '../Packages/Packages';
import WhyChooseUs from '../WhyChoose/WhyChooseUs';

// Home Container Page
const Home = () => {
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