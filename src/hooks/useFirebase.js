// Importing Default Authenticate Functions from Firebase
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthApp from "../Firebase/firebase.init";

// Initialize Authentication App
initializeAuthApp();

// Providing Google and Github Provider and Auth
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

// Calling useFirebase Function for further using
const useFirebase = () => {
    // All States for user, email, password, error, photo, name
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Function For Clearing Error 
    const ClearError = () => {
        setTimeout(() => {
            setError("");
        }, 8000);
    };

    // Clear ERROR
    useEffect(() => {
        ClearError();
    }, [error]);

    // Sign In By Google
    const signInByGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider);
    }

    // Sign In By Github
    const signInByGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    // Sign Out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    // Observer for User State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    // Return the functions and states
    return {
        user,
        setUser,
        isLoading,
        signInByGoogle,
        logOut,
        signInByGithub,
        setError,
        error

    }
}
export default useFirebase;