import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Carimage = () => {
    const { id } = useParams(); // Extracting the `id` from the route parameter
    const [cardetail,setCardetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const getCardetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/detail/${id}`);
            setCardetail(response.data.car);

            setLoading(false);
        } catch (error) {
            console.error("Error fetching item details:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getCardetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!cardetail) {
        return <p>Item not found!</p>;
    }

    return (
        <div>
            
            <img 
                src={cardetail.image || "/img/noimage.jpg"} 
                alt={cardetail.model} 
                width="500" 
            />
        </div>
    );
};

export default Carimage;
