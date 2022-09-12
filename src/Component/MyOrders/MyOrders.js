import React, { useEffect, useState } from "react";
import { HiOutlineDesktopComputer } from "react-icons/hi";

import { Table } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function Orders() {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);
  const [matchorders, setMatchOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));

    setMatchOrders(orders.filter((order) => order.email === user.email));
  }, [user.email, matchorders]);

  return (
    <div className="table bg-light my-2">
      <h4 className="">Here Your Order</h4>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Car Name</th>
            <th>Price</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Payment</th>
          </tr>
        </thead>
        {matchorders.map((order) => (
          <tbody key={order?._id}>
            <tr>
              <td>{order?.title}</td>
              <td>{order?.price}</td>
              <td>{order?.name}</td>
              <td>{order?.email}</td>
              <td>{order?.number}</td>
              <td>{order?.date}</td>
              <td>
                <Badge bg="info" text="dark">
                  {order?.status}
                </Badge>
              </td>
              <td>
              <Link to={`/payment/${order?._id}`}>
                <button className="btn btn-success">Pay</button>
              </Link>
            </td>
            </tr>
            
          </tbody>
        ))}
      </Table>
    </div>
  );
}
