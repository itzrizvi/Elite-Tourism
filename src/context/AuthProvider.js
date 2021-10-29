import React, { createContext } from 'react';
import useFirebase from '../hooks/useFirebase';

// Exporting AuthContext for further use
export const AuthContext = createContext();

// Destructuring Children from props
const AuthProvider = ({ children }) => {
    const allContext = useFirebase();
    return (
        // passing value and children to the authcontext
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;