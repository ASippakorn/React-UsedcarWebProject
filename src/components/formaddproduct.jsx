import React from 'react'

const Formaddproduct = () => {
  return (
        <div className="form-container">
    <form action="/create" method="POST" encType="multipart/form-data">
        {" "}
        {/* enctype for upload file*/}
        {/* Image area*/}
        <label htmlFor="image">Image</label>
        <input type="file" name="image" />
        <div className="form-group">
        <label htmlFor="cartype">Type of car:</label>
        <select name="cartype" id="cartype">
            <option value="Sport">SPORT CAR</option>
            <option value="Super">SUPER CAR</option>
            <option value="Hyper">HYPER CAR</option>
            <option value="Suv">SUV</option>
            <option value="Other">Other</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="brand">Brand:</label>
        <select name="brand" id="brand">
            <option value="Alfa Romeo">Alfa Romeo</option>
            <option value="BMW">BMW</option>
            <option value="Ford">Ford</option>
            <option value="Mercedes-Benz">Mercedes-Benz</option>
            <option value="Aston Martin">Aston Martin</option>
            <option value="Bugatti">Bugatti</option>
            <option value="Lamborghini">Lamborghini</option>
            <option value="Maserati">Maserati</option>
            <option value="Audi">Audi</option>
            <option value="Cadillac">Cadillac</option>
            <option value="Land Rover">Land Rover</option>
            <option value="Porsche">Porsche</option>
            <option value="Bentley">Bentley</option>
            <option value="Ferrari">Ferrari</option>
            <option value="McLaren">McLaren</option>
            <option value="Rolls-Royce">Rolls-Royce</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="model">Model</label>
        <input type="text" id="model" name="model" />
        </div>
        <div className="form-group">
        <label htmlFor="mileage">Mileage</label>
        <input type="number" id="mileage" name="mileage" />
        </div>
        <div className="form-group">
        <label htmlFor="year">Year</label>s
        <input type="number" id="year" name="year" />
        </div>
        <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
            type="text"
            id="description"
            name="description"
            style={{ width: "auto", height: 40 }}
        />
        &gt;
        </div>
        <div className="form-group">
        <label htmlFor="carcondition">Condition</label>
        <select name="carcondition" id="carcondition">
            <option value="Excellent">Excellent</option>
            <option value="Good">Good</option>
            <option value="Fair">Fair</option>
        </select>
        </div>
        <div className="form-group">
        <label htmlFor="fuel">Fuel type</label>
        <input type="text" id="fuel" name="fuel" />
        </div>
        <div className="form-group">
        <label htmlFor="insurance">Insurance(YRS)</label>
        <input type="number" id="insurance" name="insurance" />
        </div>
        <div className="form-group">
        <label htmlFor="price">Price($)</label>
        <input type="number" id="price" name="price" />
        </div>
        <label className="Certified checkbox">
        <input type="checkbox" name="Certified" defaultValue="Yes" /> Certified
        used car
        </label>{" "}
        <br />
        <button className="submit-btn">Create</button>
    </form>
    <a href="javascript:history.back()">Back</a>
</div>

  )
}

export default Formaddproduct;