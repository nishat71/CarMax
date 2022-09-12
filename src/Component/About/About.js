import React from 'react';
import "./About.css"
import { FaPeopleCarry } from "react-icons/fa"
import { FcServices } from "react-icons/fc"
import { GrProductHunt } from "react-icons/gr"
import { AiTwotoneCar } from "react-icons/ai"


const About = () => {
  return (
    <div className="about bg-light">
      <div className="about-container">
        <div className="section-title">
          <h4>What we do</h4>
          <h2>About Us</h2>
        </div>
        <h1 className='title text-left text-dark'>Every Time We Provide <br /> <span className='text-danger'>Best Services</span></h1>
        <div className='about-content py-4'>
          <div className="content1 mx-1">
            <div className="content1_1 p-3 shadow">
              <h1 className='  text-danger'><span className='icon'><FaPeopleCarry /></span> <br /> Best Instruction Guide <br />  </h1>
              <p className='text-justify text-muted'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</p>
            </div>
            <div className="side-image">

            </div>
          </div>
          <div className="content2">
            <div className="content2_1 p-3 shadow">
              <h1 className='  text-danger'><span className='icon text-center'><AiTwotoneCar /></span> <br /> Laxury Cars <br /> </h1>
              <p className='text-justify text-muted'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</p>
            </div>
            <div className="content2_1 p-3 shadow">
              <h1 className=' text-danger'><span className='icon'><FcServices /></span> <br /> World Class Service <br /> </h1>
              <p className='text-justify text-muted'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</p>

            </div>
            <div className="content2_1  p-3 shadow">
              <h1 className=' text-danger'><span className='icon'><GrProductHunt /></span> <br /> Original Spare Parts <br />  </h1>
              <p className='text-justify text-muted'>Make sure the car is in neutral before releasing the clutch. The neutral slot is the empty space between the gears, represented by the bar in the middle of the "H."</p>


            </div>
          </div>
        </div>
      </div>

    </div>




  );
};

export default About;