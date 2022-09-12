import React from 'react';
import "./Footer.css"
import { BsFillPhoneFill } from "react-icons/bs"
import { AiTwotoneMail } from "react-icons/ai"
import { FaLocationArrow } from "react-icons/fa"
import { Link } from 'react-router-dom';



const Footer = () => {
    return (
        <div className='footer d-flex'>

            <div className="footer-contact">
                <div className="shop-details text-muted">
                    <h1><Link to={"/"} className="text-decoration-none  text-light">Car<span className='text-danger'>Max</span></Link></h1>
                    <p className=''>Choose from over 1 thousand cars in more than 200 countries, 1000
                        professional's reviews. Book car to over 5000 destinations worldwide.</p>
                </div>
                <div className="contact-us text-light">
                    <h1><Link to={"/contact"} className="text-decoration-none  text-light">Con<span className='text-danger'>tact</span></Link></h1>
                    <ul className='list-unstyled text-light'>
                        <li className='mb-2'> <span className='me-1'><BsFillPhoneFill /></span>Phone <br />+88 01 234 567 890</li>
                        <li className='mb-2'><span className='me-1'><AiTwotoneMail /></span>Email <br />carmax@gmail.com</li>
                        <li className='mb-2'> <span className='me-1'><FaLocationArrow /></span>Address <br />123, Paltan, Dhaka</li>
                    </ul>
                </div>
                <div className="about-us text-light">
                    <h1><Link to={"/about"} className="text-decoration-none  text-light">About <span className='text-danger'>Us</span></Link></h1>
                    <ul className='list-unstyled text-light'>
                        <li className='my-1'><Link to={"/cars"} className="text-decoration-none  text-light">Cars</Link></li>
                        <li className='my-1'><Link to={"/about"} className="text-decoration-none  text-light">About</Link></li>
                        <li className='my-1'><Link to={"/contact"} className="text-decoration-none  text-light">Contact</Link></li>
                    </ul>
                </div>
                <div className="support text-light">
                    <h1>Sup<span className='text-danger'>port</span></h1>
                    <ul className='list-unstyled text-light'>
                        <li className='my-1 text-light p1weight'>Instruction Guide</li>
                        <li className='my-1 text-light p1weight'>Luxury Cars</li>
                        <li className='my-1 text-light p1weight'>World Class Service</li>
                        <li className='my-1 text-light p1weight'>Original Spare Parts</li>
                    </ul>
                </div>
            </div>
            <hr className='mx-auto' />

            <div className="copyright text-center text-light">
                <p>Copyright © 2022 CarMax.Designed By <br /><span className='text-danger'>Omar, Nishat & Khaled</span></p>
                <p className='text-danger'>Term & Conditions <span className='text-light'>|</span> Privacy Policy</p>
            </div>

        </div>


    );
};

export default Footer;