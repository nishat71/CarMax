import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar} from "react-icons/ai"
import { BsStarHalf} from "react-icons/bs"
import "./Cardetails.css";

const Cardetails = () => {
  const [car, setCar] = useState([]);
  const [matchedCar, setMatchedCar] = useState([]);
  const { carId } = useParams();
  useEffect(() => {
    fetch('http://localhost:8000/addCar/')
      .then((res) => res.json())
      .then((data) => setMatchedCar(data.find((car) => car._id === carId)));
  }, [carId, setMatchedCar]);

  const [review, setReview] = useState({
    review: "",
    rating: "",
  });
  const [reviewPost, setReviewPost] = useState([]);

  const handleReview = (e) => {
    setReview({
      ...review,
      title: matchedCar?.title,
      [e.target.name]: e.target.value,
    });
  };
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/reviews", review).then((res) => {
      if (res.status === 200) {
        alert("review done");
      }
    });
  };

  console.log(reviewPost);
  const [orders, setOrder] = useState({
    title: matchedCar?.title,
    price: matchedCar?.price,
    name: "",
    email: "",
    number: "",
    date: new Date(),
    status: "pending",
    test: "test",
  });
  const handleOrder = (e) => {
    setOrder({
      ...orders,
      [e.target.name]: e.target.value,
      title: matchedCar?.title,
      price: matchedCar?.price,
    });
  };
  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    axios.post("http://localhost:8000/orders", orders).then((res) => {
      console.log(res);
      if (res.status === 200) {
        alert("Order in pending now");
      }
    });
  };
  console.log(matchedCar?.title, "matchedCar?.title");
  useEffect(() => {
    fetch("http://localhost:8000/reviews")
      .then((res) => res.json())
      .then((data) =>
        setReviewPost(
          data.filter((review) => review.title === matchedCar?.title)
        )
      );
    // setReviewPost(data.filter((review) => review.title === matchedCar?.title))
  }, [matchedCar?.title]);

  return (
    <div className="box">
      <div className="bradcumb">
        <h1>
          <span>Car</span> Order
        </h1>
      </div>
      <div className="car-detail-container">
        <div className="car-detail-container-left">
          <img src={matchedCar?.image} alt="" />
          <h1 className="title-detail">{matchedCar?.title}</h1>
        </div>
        <div className="car-detail-container-right">
          <h3 className="specification">Vehicle Specifications</h3>
          <div className="list-description">
            <div className="col-lg-12">
              <ul>
                <li>
                  <span>Model:: </span>
                  <span className="Specification-part">
                    {matchedCar?.title}
                  </span>
                </li>
                <li>
                  <span>per km:: </span>
                  <span className="Specification-part">{matchedCar?.km}</span>
                </li>
                <li>
                  <span>fuel:: </span>
                  <span className="Specification-part">{matchedCar?.fuel}</span>
                </li>

                <li>
                  <span>engine:: </span>
                  <span className="Specification-part">
                    {matchedCar?.engine}
                  </span>
                </li>
                <li>
                  <span>horsepower:: </span>
                  <span className="Specification-part">
                    {matchedCar?.horsepower}
                  </span>
                </li>

                <li>
                  <span>color:: </span>
                  <span className="Specification-part">
                    {matchedCar?.color}
                  </span>
                </li>
                <li>
                  <span>warrenty:: </span>
                  <span className="Specification-part">
                    {matchedCar?.warrenty}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="car-details">
        <div className="car-description">
          <h4 className="middle-title">Vehicle Description</h4>
          <p>{matchedCar?.description}</p>
        </div>
        <div className="car-features">
          <h4 className="middle-title">Features</h4>
          <div className="features-list">
          <div className="features-list-part">
               <ul>
                 <li>{matchedCar?.features1}</li>
                 <li>{matchedCar?.features2}</li>
               </ul>
             </div>
             <div className="features-list-part">
               <ul>
                 <li>{matchedCar?.features3}</li>
                 <li>{matchedCar?.features4}</li>
               </ul>
             </div>
             <div className="features-list-part">
               <ul>
                 <li>{matchedCar?.features5}</li>
                 <li>{matchedCar?.features6}</li>
               </ul>
             </div>
          </div>
        </div>

        <div className="car-safety">
          <h4 className="middle-title">Safety</h4>
          <div className="safety-list">
          <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety1}</li>
              </ul>
            </div>
            <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety2}</li>
              </ul>
            </div>
            <div className="safety-list-part">
              <ul>
                <li>{matchedCar?.safety3}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="warranty">
          <h4 className="middle-title">Warranty</h4>
          <p>{matchedCar?.warranty}</p>
        </div>
      </div>


          {/* products review */}
       <div className="container text-start mt-5">
         <div className="products-review mb-2">
           <h2 className="fw-bold">Product Reviews</h2>
           <span className="review-star fs-3 mb-4"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
         </div>
        
         {reviewPost?.map((re) =>(
           <div className="">
             <h4 className="border border-grey p-3 mb-2" key=
             {re}><p><span className="review-star pb-4"><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><BsStarHalf/></span>by *****</p>{re.review}</h4>
           </div>
         ))}
       </div>

    {/* products review */}
      {/* <div>
        {reviewPost?.map((re) => (
          <h1 key={re}>{re.review}</h1>
        ))}
      </div> */}





      <div className="contact-area">
        <div className="wrapper">
          <div className="section-title">
            <h4><span>Looking for Car?</span>Fill Up The Form For Order Your Dream Car</h4>
          </div>
          <div className="contact">
            <div className="contact-form">
              <h5 class="title">Order Now</h5>
              <form onSubmit={handleOrderSubmit}>
                <input className="contact-input"
                  type="text"
                  name="name"
                  onChange={handleOrder}
                  placeholder="Your Name"
                />
                <input
                  type="email"
                  name="email"
                  onChange={handleOrder}
                  placeholder="Your email"
                />
                <input
                  type="number"
                  name="number"
                  onChange={handleOrder}
                  placeholder="Your Phone Number"
                />
                <input type="submit" value="SEND" />
              </form>
            </div>
            <div className="contact-form">
              <h5 class="title">Review</h5>
              <form onSubmit={handleReviewSubmit}>
                <input
                  type="text"
                  name="name"
                  onChange={handleReview}
                  placeholder="write your name"
                />
                <input
                  type="text"
                  name="review"
                  onChange={handleReview}
                  placeholder="write your opinion"
                />
                <input
                  type="text"
                  name="rating"
                  onChange={handleReview}
                  placeholder="rating"
                />
                <input type="submit" value="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>

      

    </div>
  );
};
export default Cardetails;
















