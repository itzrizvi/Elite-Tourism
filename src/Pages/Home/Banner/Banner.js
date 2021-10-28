import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

// Banner Component
const Banner = () => {
    return (
        <div className='carousel-section'>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/kJbH2Bk/slide01.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Enjoy The Tour With <br />Elite Tourism</h3>
                        <p>We provide travelers with an authentic Jordanian experience that they <br />can remember for the rest of their lives.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/Js4Dt9F/slide02.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Go Ahead & Make <br />Awesome Tour</h3>
                        <p>You can make an awesome tour with us and member each and every moment <br />we create for you and your family.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/tB50r3c/slide03.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Discover Hidden Wonders<br /> On Trips</h3>
                        <p>Discover a lot on earth planet where you live and never know whatsmore <br />can be hidden in different places.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;