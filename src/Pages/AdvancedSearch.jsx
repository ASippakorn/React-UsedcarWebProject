import React, { useState, useEffect } from "react";
import axios from "axios";

import './AdvancedSearch.css';
import Header from "../Components/header";
import Navbar from "../components/Navbar";
const AdvancedSearch = () => {
    const [filters, setFilters] = useState({
        brand: "",
        cartype: "",
        year: "",
        carcondition: "",
        insurance: "",
        certified: false,
    });

    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSearch = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.get("http://localhost:3030/search", {
                params: filters, // Automatically appends non-empty fields as query parameters
            });
            setResults(response.data.car || []);
            console.log(response.data.car)
        } catch (err) {
            console.error("Search failed:", err);
            setError("Failed to fetch search results. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    const openModal = () => {
        document.getElementById("carmodal").style.display = "block";
    };

    const closeModal = () => {
        document.getElementById("carmodal").style.display = "none";
    };

    useEffect(() => {
        const openButton = document.getElementById("openmodal");
        const closeButton = document.getElementById("closemodal");

        openButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);

        return () => {
            openButton.removeEventListener("click", openModal);
            closeButton.removeEventListener("click", closeModal);
        };
    }, []);

    return (
        <>
            <button type="button" id="openmodal">
                Advanced Filter
            </button>

            <div id="carmodal" className="modal">
                <div className="modal-content">
                    <span className="close-btn" id="closemodal">
                        x
                    </span>

                    {/* Brand Selection */}
                    <div className="car-selection">
                        {["Bentley", "BMW", "Bugatti",  "McLaren", "Mercedes-Benz", "Porsche", "Rolls-Royce","Other"].map((brand) => (
                            <label key={brand} className="car-label">
                                <img src={`logo/${brand.toLowerCase().replace(" ", "-")}.jpg`} alt={`${brand} logo`} className="car-logo" />
                                <div className="car-info">
                                    <span>{brand}</span>
                                    <input
                                        type="radio"
                                        name="brand"
                                        value={brand}
                                        checked={filters.brand === brand}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </label>
                        ))}
                    </div>

                    {/* Advanced Filters */}
                    <div className="form-container">
                        <div className="left-section">
                            <div className="form-group">
                                <label htmlFor="carType">Car Type</label>
                                <select name="cartype" id="carType" value={filters.cartype} onChange={handleInputChange}>
                                    <option value="">Other</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sedan">Sedan</option>
                                    <option value="Coupe">Coupe</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="year">Year</label>
                                <input
                                    type="range"
                                    id="year"
                                    name="year"
                                    min="1950"
                                    max="2024"
                                    value={filters.year || 2014}
                                    onChange={handleInputChange}
                                />
                                <span>{filters.year || "2014"}</span>
                            </div>

                        </div>

                        <div className="right-section">
                            <div className="form-group">
                                <label>Mileage</label>
                                <input
                                    type="range"
                                    name="mileage"
                                    min="621"
                                    max="150000"
                                    value={filters.mileage || 621}
                                    onChange={handleInputChange}
                                />
                                <span>{filters.mileage || "621"} miles</span>
                            </div>
                            <div className="form-group">
                                <label>Insurance (Years)</label>
                                {[1, 2, 3, 4, 5].map((year) => (
                                    <label key={year} style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-start'}}>
                                        <input
                                            type="radio"
                                            name="insurance"
                                            value={year}
                                            checked={filters.insurance === String(year)}
                                            onChange={handleInputChange}
                                            style={{
                                                width: 'auto'
                                            }}
                                        />
                                        {year}
                                    </label>
                                ))}
                            </div>
                            <div className="form-group">
                                <label>Condition</label>
                                {["Excellent", "Good", "Fair", "Certified"].map((condition) => (
                                    <label key={condition} style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-start'}}>
                                        <input
                                            type="radio"
                                            name="carcondition"
                                            value={condition}
                                            checked={filters.carcondition === condition}
                                            onChange={handleInputChange}
                                            style={{
                                                width: 'auto'
                                            }}
                                        />
                                        {condition}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>

                    <button type="button" id="find" onClick={handleSearch}>
                        Find
                    </button>
                </div>
            </div>

            {/* Results */}
            <div>
                {loading && <p>Loading...</p>}
                {error && <p className="error">{error}</p>}
                <ul>
                    {results.map((car, index) => (
                        <li key={index}>{car.name}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default AdvancedSearch;
