import React from "react";
// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import "./Payment.css";

export default function Payment() {
  const [payment, setPayment] = React.useState([]);
  const [matchOrder, setMatchOrder] = React.useState([]);
  const { orderId } = useParams();
  React.useEffect(() => {
    fetch(`http://localhost:8000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setMatchOrder(data.find((py) => py._id === orderId));
      });
    console.log(matchOrder);
    // setMatchOrder(payment.filter(py => console.log(py)))
  },[matchOrder]);

  const stripePromise = loadStripe('pk_test_51KCverF0oMLyXksOK8BItgsbMozxGCVJEDSyjRi09hSzNPZEoUEKn2FaIVt13VykvW21pUCCSuw7z6ywmcMTeAot00180XR1Bj')

  return (

    <div className="container">
     <div className="row ms-3 my-3">
        <div className="col-lg-7 mx-auto">
          <div className="row">
            <div className="col-12 bg-light px-4 ">
                <div className="col-12 Order-info">
                    <h4 className="fw-bold">PAYMENT DETAILS</h4>
                </div>
                <div className="col-12 bg-light px-4 ">
                  <div className="d-flex align-items-end justify-content-between mb-2 fs-5">
                    <p className="fs-5 textmuted fw-bold">Model::</p>
                    <p className="fs-5 fw-bold">{matchOrder?.title}</p>
                  </div>
                  <div className="d-flex justify-content-between mb-2">
                    <p className="fs-5 textmuted fw-bold">Price::</p>
                    <p className="fw-bold fw-bold">{matchOrder?.price}</p>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="fs-5 textmuted fw-bold">Shipping::</p>
                    <p className="fs-5 fw-bold">Free</p>
                  </div>
                
                  <div className="d-flex justify-content-between mb-2">
                    <p className="fs-5 textmuted fw-bold">Total::</p>
                    <p className="fs-5 fw-bold">{matchOrder?.price}</p>
                  </div>
                

                  {/* PayPal */}
                  {/* <div className="col-12 px-4">
                      <PayPalScriptProvider
                      options={{
                      "client-id":"AUDpIXJ2N56MTTw3LQiNVFn2kN-wCShlXtzAK5StsyILUa3wcrRN19TqAF8F8uJIITLSO5pqbQoI_1x4",
                       }}>
                      <PayPalButtons style={{ layout: "horizontal" }} />
                      </PayPalScriptProvider>
                  </div> */}
                
                {/* Card/ Stripe Promise */}
                  <div className="my-3" >
                      <Elements stripe={stripePromise}>
                        <CheckoutForm payment={matchOrder} />
                      </Elements>   
                  </div>
                
              <button className="btn btn-success my-4 col-12  fw-bold py-3 cash-delivery">Cash On Delivery</button>
                
                </div>
              </div>
          </div>
        </div>
     </div>
    </div>


  );
}















    // <div className="container">
    //   <div className="row ms-3 ">


    //     <div className="col-lg-7 pb-5 pe-lg-5">
    //        <div className="row">
    //         <div className="col-12 p-5">
    //           {/* <img
    //             src="https://www.freepnglogos.com/uploads/honda-car-png/honda-car-upcoming-new-honda-cars-india-new-honda-3.png"
    //             alt=""
    //           /> */}
    //           {/* <img src={matchOrder?.image} alt="" />
    //       <h1 className="title-detail">{matchOrder.title}</h1> */}
    //         </div>
    //         {/* <div className="row m-0 bg-light">
    //           <div className="col-md-4 col-6 ps-30 pe-0 my-4">
    //             <p className="text-muted">Mileage</p>
    //             <p className="h5">
    //               25000<span class="ps-1">Km</span>
    //             </p>
    //           </div>
    //           <div className="col-md-4 col-6  ps-30 my-4">
    //             <p className="text-muted">Transmission</p>
    //             <p className="h5 m-0">Manual</p>
    //           </div>
    //           <div className="col-md-4 col-6 ps-30 my-4">
    //             <p className="text-muted">Drive unit</p>
    //             <p className="h5 m-0">Front</p>
    //           </div>
    //           <div className="col-md-4 col-6 ps-30 my-4">
    //             <p className="text-muted">Body</p>
    //             <p className="h5 m-0">Coupe</p>
    //           </div>
    //           <div className="col-md-4 col-6 ps-30 my-4">
    //             <p className="text-muted">Color</p>
    //             <p className="h5 m-0">White</p>
    //           </div>
    //           <div className="col-md-4 col-6 ps-30 my-4">
    //             <p className="text-muted">Daily UI</p>
    //             <p className="h5 m-0">#002</p>
    //           </div>
    //         </div> */}
    //       </div> 
    //     </div>


    //     <div className="col-lg-8  p-0 ps-lg-4">
    //       <div className="row m-0">
    //         <div className="col-12 px-4">
    //           <div className="d-flex align-items-end justify-content-between mt-4 mb-2">
    //             <p className="font4 m-0">
    //               <span className="pe-1">ZAZ</span>
    //               <span className="pe-1">966</span>
    //               <span className="pe-1">B</span>
    //             </p>
    //             <p className="ps-3 textmuted">1L</p>
    //           </div>
    //           <div className="d-flex justify-content-between mb-2">
    //             <p className="textmuted">Qty</p>
    //             <p className="fs-14 fw-bold">1</p>
    //           </div>



    //           {/* <div className="d-flex justify-content-between mb-2">
    //             <p className="textmuted">Subtotal</p>
    //             <p className="fs-14 fw-bold">
    //               <span className="fas fa-dollar-sign pe-1"></span>1,450
    //             </p>
    //           </div> */}




    //           <div className="d-flex justify-content-between mb-2">
    //             <p className="textmuted">Shipping</p>
    //             <p className="fs-14 fw-bold">Free</p>
    //           </div>
    //           {/* <div className="d-flex justify-content-between mb-2">
    //             <p className="textmuted">Promo code</p>
    //             <p className="fs-14 fw-bold">
    //               -<span className="fas fa-dollar-sign px-1"></span>100
    //             </p>
    //           </div> */}
    //           <div className="d-flex justify-content-between mb-3">
    //             <p className="textmuted fw-bold">Total</p>
    //             <div className="d-flex align-text-top ">
    //               <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span>
    //               <span className="h4">1,350</span>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="col-12 px-0">
    //           <div className="row bg-light m-0">
    //             <div className="col-12 px-4 my-4">
    //               <p className="fw-bold">Payment detail</p>
    //             </div>
    //             <div className="col-12 px-4">
    //               <div className="d-flex  mb-4">
    //                 <span className="">
    //                   <p className="text-muted">Card number</p>
    //                   <input
    //                     className="form-control1"
    //                     type="text"
    //                     value="4485 6888 2359 1498"
    //                     placeholder="1234 5678 9012 3456"
    //                   />
    //                 </span>
    //                 <div className=" w-100 d-flex flex-column align-items-end">
    //                   <p className="text-muted">Expires</p>
    //                   <input
    //                     className="form-control2"
    //                     type="text"
    //                     value="01/2020"
    //                     placeholder="MM/YYYY"
    //                   />
    //                 </div>
    //               </div>
    //               <div className="d-flex mb-5">
    //                 <span className="me-5">
    //                   <p className="text-muted">Cardholder name</p>
    //                   <input
    //                     className="form-control1"
    //                     type="text"
    //                     value="David J.Frias"
    //                     placeholder="Name"
    //                   />
    //                 </span>
    //                 <div className="w-100 d-flex flex-column align-items-end">
    //                   <p className="text-muted">CVC</p>
    //                   <input
    //                     className="form-control3"
    //                     type="text"
    //                     value="630"
    //                     placeholder="XXX"
    //                   />
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           <div className="row m-0">
    //             <div className="col-12  mb-4 p-0">
    //               {/* <div className="btn btn-primary">
    //                 Purchase<span class="fas fa-arrow-right ps-2"></span>
    //               </div> */}
    //               {/* <Elements stripe={stripePromise}>
    //                 <CheckoutForm payment={matchOrder} />
    //               </Elements> */}
    //               {/* <PayPalScriptProvider
    //                 options={{
    //                   "client-id":
    //                     "AUDpIXJ2N56MTTw3LQiNVFn2kN-wCShlXtzAK5StsyILUa3wcrRN19TqAF8F8uJIITLSO5pqbQoI_1x4",
    //                 }}
    //               >
    //                 <PayPalButtons
    //                   createOrder={(data, actions) => {
    //                     return actions.order.create({
    //                       purchase_units: [
    //                         {
    //                           amount: {
    //                             value: matchOrder?.price,
    //                           },
    //                         },
    //                       ],
    //                     });
    //                   }}
    //                   onApprove={(data, actions) => {
    //                     return actions.order.capture().then((details) => {
    //                       const name = details.payer.name.given_name;
    //                       alert(`Transaction completed by ${name}`);
    //                     });
    //                   }}
    //                 />
    //               </PayPalScriptProvider> */}
    //               <PayPalScriptProvider
    //                 options={{
    //                   "client-id":
    //                     "AUDpIXJ2N56MTTw3LQiNVFn2kN-wCShlXtzAK5StsyILUa3wcrRN19TqAF8F8uJIITLSO5pqbQoI_1x4",
    //                 }}
    //               >
    //                 <PayPalButtons style={{ layout: "horizontal" }} />
    //               </PayPalScriptProvider>
               
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   {/* {matchOrder?.price && ( */}
    //   <Elements stripe={stripePromise}>
    //    <CheckoutForm payment={matchOrder} />
    //   </Elements> 
    //     {/* )} */}
    // </div>