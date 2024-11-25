import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    const { id } = useParams(); // Extracting the `id` from the route parameter
    const [itemDetail, setItemDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    const getItemDetail = async () => {
        try {
            const response = await axios.get(`http://localhost:3030/detail/${id}`);
            setItemDetail(response.data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching item details:", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getItemDetail();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!itemDetail) {
        return <p>Item not found!</p>;
    }

    return (
        <div>
            <h1>{itemDetail.brand} - {itemDetail.model}</h1>
            <img 
                src={itemDetail.image || "/pic/noimage.jpg"} 
                alt={itemDetail.model} 
                width="500" 
            />
            <p><strong>Brand:</strong> {itemDetail.brand}</p>
            <p><strong>Model:</strong> {itemDetail.model}</p>
            <p><strong>Price:</strong> ${itemDetail.price}</p>
            <p><strong>Description:</strong> {itemDetail.description}</p>
        </div>
    );
};

export default Detail;
