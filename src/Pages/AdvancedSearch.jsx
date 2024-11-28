import React, { useState, useEffect } from "react";
import axios from "axios";

import './AdvancedSearch.css';

const AdvancedSearch = ({filters,setFilters,setDetail}) => {

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
            const response = await axios.post("http://localhost:3030/advancedsearch",filters
            );

            setDetail(response.data.results)

        } catch (err) {

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
        <section>
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
                        {["Bentley", "BMW", "Bugatti", "McLaren", "Mercedes-Benz", "Porsche", "Rolls-Royce", "Other"].map((brand) => (
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
                                    <option value="Other">Other</option>
                                    <option value="SUV">SUV</option>
                                    <option value="Sport">Sport</option>
                                    <option value="Luxury">Luxury</option>
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
                                <label>Price</label>
                                <input
                                    type="range"
                                    name="price"
                                    min="621"
                                    max="1500000"
                                    value={filters.price || 0}
                                    onChange={handleInputChange}
                                />
                                <span>{filters.price || "0"} $</span>
                            </div>
                            <div className="form-group">
                                <label>Insurance (Years)</label>
                                {[1, 2, 3, 4, 5].map((year) => (
                                    <label key={year} style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start' }}>
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
                                {["Excellent", "Good", "Fair"].map((condition) => (
                                    <label key={condition} style={{ flexDirection: 'row', display: 'flex', justifyContent: 'flex-start' }}>
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
                            <footer>
                                <label>Certified Used Car</label>

                                <input
                                    type="checkbox"
                                    name="carcertified"
                                    onChange={handleInputChange}
                                    checked={filters.carcertified}
                                />


                            </footer>
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
            </section>
        </>
    );
};

export default AdvancedSearch;
