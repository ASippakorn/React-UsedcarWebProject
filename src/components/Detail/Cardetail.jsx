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
            setItemDetail(response.data.car);

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
        <article>
            <h1>{itemDetail.brand}  - <strong>{itemDetail.model} </strong> Year:{itemDetail.Year}</h1>
            <img 
                src={itemDetail.image || "/img/noimage.jpg"} 
                alt={itemDetail.model} 
                width="500" 
            />
            <p><strong>Brand:</strong> {itemDetail.brand}</p>
            <p><strong>Model:</strong> {itemDetail.model}</p>
            <p><strong>Price:</strong> ${itemDetail.price}</p>
            <p><strong>Mileage:</strong> {itemDetail.mileage+" KM "} </p>
            <p><strong>Fuel Type:</strong> {itemDetail.fuel}</p>
            <p><strong>Description:</strong> {itemDetail.description}</p>
            <button >Contact Owner</button>
        </article>
    );
};

export default Detail;
