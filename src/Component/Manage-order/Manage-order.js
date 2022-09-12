import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Badge } from "react-bootstrap";
import axios from "axios";

export default function Manageorders() {
  const [orders, setOrders] = useState([]);
  const [status, setStatus] = useState([]);
  const [isdeleted, setIsDeleted] = useState(false);
  const [isUpdated, setIsUpdated] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:8000/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [isdeleted, isUpdated]);


  const handleDelete = (id) => {
    const proceed = window.confirm("Cancel Booking!Are you sure?");
    if (proceed) {
      axios.delete(`http://localhost:8000/orders/${id}`).then((res) => {
        if (res.data.acknowledged) {
          alert("Delete Successful!");
          setIsDeleted(true);
        }
      });
    }
  };

  
  //status change
  const statusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleUpdate = (id) => {
    if (!status) {
      window.alert("Please select status");
      return;
    }

    axios
      .put(`http://localhost:8000/orders/${id}`, {
        status: status,
      })
      .then((res) => {
        if (res.data.acknowledged) {
          alert("Approved! Status updated");
          setStatus("");
          setIsUpdated(true);
        }
      });
  };

  return (
    <div className="table my-2">
      <h2 className="p-2">Here Your Order</h2>

      <Table striped bordered hover>
        <thead className="bg-dark text-light">
          <tr>
            <th>Car Name</th>
            <th>Price</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
            {/* <th>Email</th>
      <th>staus</th> */}
          </tr>
        </thead>
        {orders.map((order) => (
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
              <td className="d-flex flex-column align-items-center">
                <tr className="outline-0 w-100 rounded-1">
                  <select
                  className="form-select w-100"
                  onChange={statusChange}
                  aria-label="Default select example">
                  <option selected>Change Status</option>
                  <option value="Approved">Approve</option>
                  <option value="Rejected">Reject</option>
                  <option value="Completed">Handover</option>
                </select></tr>
                <tr className="w-100  my-1 outline:none">
                  <button
                  className="btn btn-danger w-100 outline:none"
                  onClick={() => handleDelete(order._id)}>
                  Delete
                </button></tr>
                <tr className="w-100">
                  <button
                  className="btn btn-success w-100"
                  onClick={() => handleUpdate(order._id)}>
                  Update
                </button></tr>
                
                
                
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
}
