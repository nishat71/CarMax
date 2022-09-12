import React from "react";
// import "./Homecars.css";


const HomeCars = () => {
  const [cars, setCars] = React.useState([]);
  React.useEffect(() => {
    fetch("http://localhost:8000/addCar")
      .then((res) => res.json())
      .then((data) => setCars(data.splice(0, 6)));
  }, []);

  return (
    <div className="container py-5">
      <h4 className='text-center pweight mt-5'>Popular Cars</h4>
      <h2 className='text-center text-dark h1weight'>Most <span className='text-danger'>Popular</span> Cars<br /> In Our Shop</h2>
      <div className="car-box">
        {cars.map((car) => {
          return (
            <div className="car-item my-3 shadow">
              <div className='image img-thumbnail'> <img className='' src={car.image} width="100%" alt="" />
                {/* <div className='car-buton'>
                    </div> */}
              </div>
              <div className='car-content p-2 '>
                <div className='car-content_title'>
                  <h5 className=' text-dark'>{car.brand}</h5>
                  <h3 className=' text-dark'>{car.title}</h3>

                </div>
                <div className="rating">
                  <h3 className=''>BDT {car.price}</h3>
                </div>
              </div>
              <div className="bottom-detail px-2">
                <p className=''>Rating: {car.rating}</p>

                <p>{car.fuel}</p>
                <p>26-05-22</p>
              </div>

            </div>

          );
        })}
      </div>
    </div>
  );
};

export default HomeCars;
