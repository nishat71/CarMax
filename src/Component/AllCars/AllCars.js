import axios from "axios";
import React from "react";
import "./AllCars.css"

const AllCars = () => {
  const [allcars, setAllcars] = React.useState([]);
  const [isDeleted, setIsDeleted] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8000/addCar")
      .then((res) => res.json())
      .then((data) => setAllcars(data));
  }, [isDeleted]);
  const deleteService = (id) => {
    const proceed = window.confirm("Cancel Booking!Are you sure?");
    if (proceed) {
      axios.delete(`http://localhost:8000/addCar/${id}`).then((res) => {
        if (res.data.acknowledged) {
          alert("Delete Successful!");
          setIsDeleted(true);
        }
      });
    }
  };

  return (

    <div className="my-5">
      {allcars.map((car) => {
        return (
          <div className="row my-4" >
            <div className=" all-cars border border-2">
              <div className="col-md-6 img-thumbnail me-4 border">
                <img className='img-fluid' src={car?.image}  alt="" />
              </div>
              <div className="col-md-6 ml-2 my-2">
                <h2 className="display-6 fw-bold">{car.title}</h2>
                <p className="text-secondary d-block">{car.description}</p>
                <p className="fw-bold h4">Price: {car.price} Taka</p>
              </div>
            </div>
            <button
              onClick={() => deleteService(car._id)}
              className="btn-danger btn"> Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default AllCars;




