import React from 'react';
import "./HeroSection.css";
import { HiArrowCircleRight } from "react-icons/hi"
import { Link } from 'react-router-dom';
const HeroSection = () => {
    return (
        <div className='hero-area'>
            <div className='hero-container text-light '>
                <div className="hero-content-container">
                    <h1 className='text-left h1weight'>Welcome To Car<span className='text-danger'>Max</span></h1>
                    <h2 className='text-left text-danger mb-4 h1weight'>Find Your Deam Car</h2>
                    <p className='text-left text-justify text-light mb-4 pweight'>CarMax Verso focuses on luxury cars, performance cars and also on unique limited edition vehicles. The blog contains a range of car reviews as well as products, gadgets, and accessory reviews.</p>
                    <button className='btn btn-danger rounded logout'><Link to={"/Cars"}className="text-decoration-none text-light" >Explore Our Car </Link><HiArrowCircleRight /> </button>
                  
                </div>
               
            </div>
        </div>
    );
};

export default HeroSection;