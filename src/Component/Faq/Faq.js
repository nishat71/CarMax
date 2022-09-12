import React from 'react';
import "./Faq.css"
import Accordion from 'react-bootstrap/Accordion';

export default function 
() {
  return (
    <div className='accordion area'>
       <div className="accordion-container">
       <div className="section-title">
                   <h4>View our car buying FAQs below.</h4>
                   <h2>FAQ</h2>
                </div>
                <div className="faq">
                <Accordion defaultActiveKey={['0']} alwaysOpen>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Do I get the same warranty on your vehicles as I would get if I bought from a franchised dealer?</Accordion.Header>
    
    <Accordion.Body>
    All our vehicles are supplied with the same manufacturer’s warranty and road side assistance package. The minimum is 3 years but some of the manufacturers have extended the term. For example Toyota is 5 years, Kia 7 years
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>What deposit do you require to order a car?</Accordion.Header>
    <Accordion.Body>
    If the vehicle is below £20k the deposit will be £500. £1000 for vehicles over £20k. The only exception to this will be high value vehicles or factory ordered with a high value of options. The deposit is the only money you pay until the vehicle arrives and you have inspected it.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="3">
    <Accordion.Header>Do I have to collect the vehicle or is it delivered?</Accordion.Header>
    <Accordion.Body>
    All the vehicles we suply on the website come with free driven delivery to your home address by the supplying dealer. There is a surcharge for vehicles delivered to Scotland which we can get a price for when you are ready to order.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="4">
    <Accordion.Header>If I have a problem with the car who do I contact?</Accordion.Header>
    <Accordion.Body>
    In the first instance give our office a call and we will help and advise you the best we can. However all vehicles are covered by the manufacturer’s warranty which allows you to take the vehicle into any dealership for assessment and repair.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
                </div>
       
       </div>
    </div>
  )
}
