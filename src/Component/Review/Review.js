import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "./Review.css";
import { ImQuotesRight } from "react-icons/im"
const Review = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          autoplaySpeed: 2000,
          cssEase: "linear",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1500,
          cssEase: "linear",
        }
      }
    ]
  };

  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/reviews')
      .then(res => res.json())
      .then(data => setReview(data))
  }, []);

  return (
    <section className="testimonial-area">
      <div className="review-container">
        <div className="section-title">
          <h4>What we do</h4>
          <h2>What Clients Says</h2>
        </div>
        <Slider {...settings}>
          {review.map(item =>
            <div className="testimonial" key={item?._id}>
              <div className="single-testimonial">
                <p className='quote'><ImQuotesRight /></p>
                <p>{item?.review}</p>
                <div className="autor-info">
                  <img src="https://thumbs.dreamstime.com/b/review-character-shows-assess-reviewing-evaluate-reviews-showing-34211637.jpg" alt="" />
                  <h4>{item?.name}</h4>
                  {/* <h4>{item?.name}<br /><span>{item?.profession}</span></h4> */}
                </div>
              </div>

            </div>
          )}
        </Slider>

      </div>
    </section>

  );
};

export default Review;