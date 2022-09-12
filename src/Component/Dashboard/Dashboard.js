import React, { useEffect, useState } from 'react';
import "./Dashboard.css";
import Slider from "react-slick";
import { Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";
import { GiGrowth } from "react-icons/gi";
import { MdArrowUpward } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { BiArrowToBottom } from "react-icons/bi";
import { BiArrowFromBottom } from "react-icons/bi";
import { HiCurrencyBangladeshi } from "react-icons/hi";
import { MdOutlineVisibility } from "react-icons/md";
import { HiOutlineCurrencyBangladeshi } from "react-icons/hi";


import { Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';




export default function Dashboard() {
  const data = [{ name: '2018', uv: 400, pv: 2400, amt: 2400 }, { name: '2019', uv: 600, pv: 2700, amt: 2700 }, { name: '2020', uv: 300, pv: 2000, amt: 2000 }, { name: '2021', uv: 600, pv: 2900, amt: 2900 }, { name: '2022', uv: 700, pv: 3000, amt: 3000 }];
  const data1 = [{ name: '2018', uv: 300, pv: 2100, amt: 2000 }, { name: '2019', uv: 400, pv: 2400, amt: 2500 }, { name: '2020', uv: 300, pv: 2000, amt: 2000 }, { name: '2021', uv: 600, pv: 2900, amt: 2900 }, { name: '2022', uv: 700, pv: 3000, amt: 3000 }];
  const data2 = [{ name: '2018', uv: 350, pv: 2200, amt: 2300 }, { name: '2019', uv: 700, pv: 2800, amt: 2900 }, { name: '2020', uv: 300, pv: 2000, amt: 2000 }, { name: '2021', uv: 600, pv: 2900, amt: 2900 }, { name: '2022', uv: 700, pv: 3000, amt: 3000 }];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  const { admin } = useAuth();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/orders?email=${user.email}')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);



  return (
    <div className='py-2'>
      {
        admin ? <div>
          <nav className="navbar navbar-expand-lg navbar-light text-light my-2 bg-light">
        <div className="container-fluid">
          <p className="navbar-brand text-danger fs-2 fw-bold demo">Car<span className='text-dark'>Max</span></p>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              </li>
            </ul>
            <div className="dash-logo">
              <button className='btn-danger px-2 py-2 rounded mx-2 fw-bold'> <Link to={"/makeadmin"} className="text-decoration-none  text-light">Make-Admin</Link></button>
              <img src="https://i.ibb.co/sgFyKzh/Cartoon-Pic-Ideas-for-DP-Profile-04.png" alt="" />
            </div>
          </div>
        </div>
      </nav>

      <div className="welcome bg-light mb-3 shadow border rounded">
        <h4 className='text-light'>Welcome Admin</h4>
        <p className='fw-bold'>CarMax allows us to guide you through the innovative stress free approach in finding your dream car and  makes you easy to buy a lavish car.</p>
      </div>


      <div className="portfolio-performance shadow">
        <h2>Portfolio Performance</h2>
        <div className="portfolio">
          <div className="performance">
            <div className="logo">
              <p><FcSalesPerformance /></p>
            </div>
            <div className="perform-content">
              <h4>Total sales</h4>
              <h1>1.5M</h1>
              <p><span><BiArrowToBottom />14.1%</span> less sales</p>
            </div>
          </div>

          <div className="performance">
            <div className="logo">
              <p><GiGrowth /></p>
            </div>
            <div className="perform-content">
              <h4>Capital Gains</h4>
              <h1>323K</h1>
              <p><span><BiArrowFromBottom />14.1%</span> Growth Rate</p>
            </div>
          </div>

          <div className="performance">
            <div className="logo">
              <p><IoIosPeople /></p>
            </div>
            <div className="perform-content">
              <h4>Regular Clients</h4>
              <h1>3230</h1>
              <p><span><BiArrowFromBottom />5.1%</span> Growth Rate</p>
            </div>
          </div>
        </div>
      </div>
      <div className="sales-container">
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />20k</h2>
          <h4>sales last month</h4>


        </div>
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />50k</h2>
          <h4>sales income</h4>

        </div>
        <div className='sales shadow'>
          <h2><MdOutlineVisibility />10k</h2>
          <h4>website visitors</h4>

        </div>
        <div className='sales shadow'>
          <h2><HiCurrencyBangladeshi />550k</h2>
          <h4>total revenue</h4>

        </div>
      </div>

      <div className="chart">
        <Slider {...settings}>
          <div className="single-chart bg-light">
            <h4 className='text-center'>New Accounts Since 2018</h4>
            <h3><MdArrowUpward /> 78 %<span> +14</span></h3>
            <p className='text-danger'> <LineChart width={700} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart></p>
          </div>

          <div className="single-chart bg-light">
            <h4 className='text-center'>Last Total Sales</h4>
            <h3><MdArrowUpward /> 67 %<span> 12000000<HiOutlineCurrencyBangladeshi /></span></h3>
            <p className='text-danger'> <LineChart width={700} height={300} data={data1} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart></p>
          </div>

          <div className="single-chart bg-light">
            <h4 className='text-center'>Total Revenue</h4>
            <h3><MdArrowUpward /> 80 %<span> 300000000<HiOutlineCurrencyBangladeshi /></span></h3>
            <p className='text-danger'> <LineChart width={700} height={300} data={data2} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart></p>
          </div>
        </Slider>
      </div>


      <div className="table bg-light">
        <h2 className="p-2">View All Orders</h2>
        <div className="table-content">
          <div className="content1">
            <label>show
              <select className=''>
                <option value="10" className='form-control'>10</option>
                <option value="20" className='form-control'>20</option>
                <option value="30" className='form-control'>30</option>
                <option value="40" className='form-control'>40</option>

              </select>
              entries</label>
          </div>
          <div className="content2">
            <label>search:<input type="search" className='form-control'></input></label>
          </div>
        </div>
        <Table striped bordered hover>
          <thead className='bg-dark text-light'>
            <tr>
              <th>Car</th>
              <th>Price</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Number</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          {
            orders.map(order =>
              <tbody key={order?._id}>
                <tr>
                  <td>{order?.title}</td>
                  <td>{order?.price}</td>
                  <td>{order?.name}</td>
                  <td>{order?.email}</td>
                  <td>{order?.number}</td>
                  <td>{order?.date}</td>
                  <td><Badge bg="info" text="dark">
                    {order?.status}
                  </Badge></td>

                </tr>

              </tbody>
            )
          }
        </Table>
      </div>
        </div> :  <div className="welcome bg-light mb-3 shadow border rounded client" style={{minHeight: "80vh"}}>
        <h4 className='text-light'>Welcome Client</h4>
        <p className='fw-bold'>CarMax allows us to guide you through the innovative stress free approach in finding your dream car and  makes you easy to buy a lavish car.</p>
      </div>
      }
    </div>

  )
}
