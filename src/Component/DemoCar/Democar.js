import React, { useState, useEffect } from 'react';
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "./Democar.css"

const Democar = () => {
  const [cars, setCars] = useState();
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
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
          slidesToShow: 2,
          slidesToScroll: 2,
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

  useEffect(() => {
    fetch('http://localhost:8000/addCar')
      .then(res => res.json())
      .then(data => setCars(data));
  }, []);

  return (
    <div className="latest-car-area">

      <div className='latest-car'>
        <div className="section-title">
          <h2 className='text-dark'>Upcoming Car</h2>
        </div>
        <div className='latest-car-box shadow'>
          <Slider {...settings}>
            {
              cars?.map(item =>
                <div key={item?._id} className="single-latest-car">

                  <div className='latest-img img-thumbnail'>
                    <img className='' src={item?.image} width="100%" alt="" />
                  </div>
                  <div className='latest-car-content'>
                    <div className='latest-car-title'>
                      <h2 className=''>{item?.title}</h2>
                      <p className=''>BDT {item?.price}</p>
                    </div>
                    <div className=''>
                      <p></p>
                    </div>
                  </div>

                </div>
              )
            }
          </Slider>
        </div>
      </div>

    </div>


  );
};

export default Democar;