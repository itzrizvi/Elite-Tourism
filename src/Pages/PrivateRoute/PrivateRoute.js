import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


// Creating Private rout and getting children
const PrivateRoute = ({ children, ...rest }) => {
    // For Delaying tje loading data and showing spinner
    const { user, isLoading } = useAuth();
    if (isLoading) {
        return <Spinner className='my-3 spinner' animation="grow" variant="info" />;
    }
    return (
        // Route and set the private rout with condition and redirection
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>
            }
        >
        </Route>
    );
};

export default PrivateRoute;