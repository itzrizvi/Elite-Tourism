import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFan, faFlag, faHamburger, faMapMarker, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import './Package.css';
import { Link } from 'react-router-dom';


const Package = ({ eachPackage }) => {
    // Destructuring from Props
    const { img, name, destination, duration, pernight, _id } = eachPackage;

    //Font Awesome Icons
    const markerIcon = <FontAwesomeIcon icon={faMapMarker} />
    const planeIcon = <FontAwesomeIcon icon={faPlaneDeparture} />
    const foodIcon = <FontAwesomeIcon icon={faHamburger} />
    const fanIcon = <FontAwesomeIcon icon={faFan} />
    const flagIcon = <FontAwesomeIcon icon={faFlag} />

    return (
        <Col md={4} sm={6} xs={12} className='mb-5'>
            <div className="package-inner">
                <div className="pack-img">
                    <img src={img} alt="PackageImg" className='img-fluid' />
                </div>
                <div className="details">
                    <div className="price">
                        <p>{pernight}</p>
                    </div>
                    <p className='destination'>{markerIcon} {destination}</p>
                    <h2>{name}</h2>
                    <p className="duration">{duration}</p>
                    <p className="facilities"><span>{planeIcon}</span> Airport, <span>{foodIcon}</span> Foods, <span>{fanIcon}</span> AC</p>
                    <Link to={`/packagedetails/${_id}`}>
                        <button >{flagIcon} Book Now</button>
                    </Link>

                </div>
            </div>
        </Col>
    );
};

export default Package;