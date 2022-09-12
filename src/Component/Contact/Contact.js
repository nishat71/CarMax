import axios from "axios";
import React, { useState } from "react";
import "./Contact.css";
import {FaLocationArrow} from "react-icons/fa";
import {AiFillPhone} from "react-icons/ai";
import {AiOutlineMail} from "react-icons/ai";
import {DiWebplatform} from "react-icons/di";



export default function Contact() {
  const [contact, setContact] = useState({
    name :"",
    email: "",
    subject: "",
    message: ""
  });
  const handleContact = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  }
  const handleContactSubmit = async(e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/contact', contact)
    .then(res=>{
      console.log(res);
      if(res.status === 200){
        alert('Message Send');
      }
    })
  }
  return (
      
             <section className="contact-area">
        <div className="contact-container">
            <div className="section-title">
                <h2>Contact Us</h2>
            </div>
            <div className="contact">
                <div className="contact-address">
                      <div className="single-address">
                        <p><FaLocationArrow/></p>
                          <h4>Address <span>1123,west B block, London</span></h4>
                      </div>
                      <div className="single-address">
                        <p><AiFillPhone/></p>
                          <h4>Phone <span>+123 123 3434 454</span></h4>
                      </div>
                      <div className="single-address">
                        <p><AiOutlineMail/></p>
                          <h4>Email <span>info@gmail.com</span></h4>
                      </div>
                      <div className="single-address">
                        <p><DiWebplatform/></p>
                          <h4>Website <span>www.gmail.com</span></h4>
                      </div>
                </div>
                <div className="contact-form1">
                    <form onSubmit={handleContactSubmit}>
                       <input className="form-control px-2" type="text" name="name" placeholder="Your name" onChange={handleContact}/>
                       <input className="form-control px-2" type="email" name="email" placeholder="Your email" onChange={handleContact}/>
                       <input className="form-control px-2" type="text" name="subject" placeholder="Your subject" onChange={handleContact}/>
                       <textarea className="form-control" name="message" id="" placeholder="Message" onChange={handleContact}/>
                       <input type="submit" value="send"/>

                    </form>
                </div>
            </div>
        </div>
    </section>
       
  )
}
