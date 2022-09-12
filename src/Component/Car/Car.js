import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Car = (props) => {
    const { image, brand, title, price, rating, fuel, _id } = props.demo;
    return (
        <div className=" car-item my-3 shadow">
            <div className='image img-thumbnail'> <img className='' src={image} width="100%" alt="" />
                <div className='car-buton'>
                    <h3 className='logo'><Link to={`${_id}`}>Book Now</Link></h3>
                </div>
            </div>
            <div className='car-content p-2 '>
                <div className='car-content_title'>
                    <h5 className=' text-dark'>{brand}</h5>
                    <h3 className=' text-dark'>{title}</h3>

                </div>
                <div className="rating">
                    <h3 className=''>BDT {price}</h3>
                </div>
            </div>
            <div className="bottom-detail">
                <p className=''>Rating: <AiFillStar /> {rating}</p>
                {/* <p>{transmission}</p> */}
                <p>{fuel}</p>
                <p>26-11-21</p>
            </div>
        </div>




    );
};

export default Car;