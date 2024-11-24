import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
const Formaddproduct = () => {
  const [form, setForm] = useState({
    cartype: "",
    brand: "",
    model: "",
    mileage: "",
    year: "",
    description: "",
    carcondition: "",
    fuel: "",
    insurance: "",
    price: "",
    certified: false,
  });
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value,type, checked } = e.target;
    setForm(() => ({
      ...form,
      [name]: type === "checkbox" ? checked : value, // Handle checkboxes separately
    }));
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Capture the selected file
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Prepare form data for submission
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });

    if (image) {
      formData.append("image", image); // Append the file if selected
    }

    try {
      const res = await axios.post("http://localhost:3030/register", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response from server:", res.data);
      alert("Create successful!");
      navigate("/");
    } catch (err) {
      console.error("Error during Create product:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" name="image" onChange={handleFileChange} />
        </div>
        <div className="form-group">
          <label htmlFor="cartype">Type of car:</label>
          <select name="cartype" id="cartype" onChange={handleChange}>
            <option value="Sport">SPORT CAR</option>
            <option value="Super">SUPER CAR</option>
            <option value="Hyper">HYPER CAR</option>
            <option value="Suv">SUV</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand:</label>
          <select name="brand" id="brand" onChange={handleChange}>
            <option value="BMW">BMW</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Porsche">Porsche</option>
            <option value="Bentley">Bentley</option>
            <option value="Ferrari">Ferrari</option>
            <option value="McLaren">McLaren</option>
            <option value="Rolls-Royce">Rolls-Royce</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="model">Model</label>
          <input type="text" id="model" name="model" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="mileage">Mileage</label>
          <input type="number" id="mileage" name="mileage" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="year">Year</label>
          <input type="number" id="year" name="year" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            onChange={handleChange}
            style={{ width: "100%", height: "80px" }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="carcondition">Condition</label>
          <select name="carcondition" id="carcondition" onChange={handleChange}>
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="fuel">Fuel type</label>
          <input type="text" id="fuel" name="fuel" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="insurance">Insurance(YRS)</label>
          <input type="number" id="insurance" name="insurance" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price($)</label>
          <input type="number" id="price" name="price" onChange={handleChange} />
        </div>
        <label className="checkbox">
          <input
            type="checkbox"
            name="certified"
            onChange={handleChange}
            checked={form.certified}
          />{" "}
          Certified used car
        </label>{" "}
        <br />
        <button type="submit">Create</button>
      </form>
      <a href="javascript:history.back()">Back</a>
    </div>
  );
}

export default Formaddproduct;