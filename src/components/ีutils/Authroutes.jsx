import { Outlet, Navigate } from "react-router-dom";
import React from "react";
import { useState, useEffect } from "react";
import axios from 'axios';


const Authroutes = () => {
    axios.defaults.withCredentials = true; // Ensure credentials are sent with requests
    const [isAuth, setisAuth] = useState(null);

    const checkSession = async () => {
        try {
            const res = await axios.post(
                "http://localhost:3030/auth",
                {},
                { withCredentials: true }
            );
            // Assuming response indicates authentication status
            setisAuth(res.data.isAuth);
            console.log(isAuth)
        } catch (error) {
            console.error("Error checking session:", error);
            setisAuth(false); // Set to false in case of error
        }
    };

    useEffect(() => {
        checkSession(); // Call checkSession when the component mounts
    }, []);

    // Show loading state while authentication status is being determined
    if (isAuth === null) {
        return <div>Loading...</div>;
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default Authroutes;
