import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons';
import './Login.css';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Login = () => {
    // FontAwesome ICONS
    const gIcon = <FontAwesomeIcon icon={faGoogle} />;
    const githubIcon = <FontAwesomeIcon icon={faGithub} />;

    // Destructuring exported function from useAuth
    const {
        signInByGoogle,
        signInByGithub,
        setUser,
        setError,
        error } = useAuth();

    // Getting Location for Redirection
    const location = useLocation();
    // Use history for getting url to push location
    const history = useHistory();
    // redirectional url creation
    const redirectURL = location.state?.from || '/home';

    // Google Sign In
    const handleGoogleSignIn = () => {
        signInByGoogle()
            .then(result => {
                history.push(redirectURL);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // Github Sign In
    const handleGithubSignIn = () => {
        signInByGithub()
            .then((result) => {
                setUser(result.user);
                history.push(redirectURL);
            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <>
            <div className="common-banner text-center">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="section-title">
                                <h2>LOGIN</h2>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="login-form text-center py-5">
                <Container>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="service-title text-uppercase">
                                <h2>Please Login Here...</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            {/* Login By Google or Github */}
                            {error && <p className="text-danger">There is an error please try again<br />{error}</p>}
                            <button onClick={handleGoogleSignIn} className='google-btn'>{gIcon} Login with Google</button>
                            <button onClick={handleGithubSignIn} className='github-btn ms-3'>{githubIcon} Login with Github</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Login;