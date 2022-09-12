import React, { useEffect, useState } from 'react';
import "./Reviewpost.css";
import { Table } from 'react-bootstrap';
// import { Badge } from 'react-bootstrap';
// import {HiOutlineDesktopComputer} from "react-icons/hi";


export default function ReviewPost() {
  const [review, setReview] = useState([]);
  // const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8000/reviews')
      .then(res => res.json())
      .then(data => setReview(data));
  }, []);
  console.log(review)
  return (
    <div className='row'>
      <div className="col-xl-12">

        <div className="review-table">
          <h2 className="p-2 my-2">All Review</h2>
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
            <thead>
              <tr>
                <th>User Name</th>
                {/* <th>Profession</th> */}
                <th>Review</th>
                <th>Rating</th>
              </tr>
            </thead>
            {

              review.map(item =>
                <tbody key={item?._id}>
                  <tr>
                    <td>{item?.name}</td>
                    {/* <td>{item?.profession}</td> */}
                    <td>{item?.review}</td>
                    <td>{item?.rating}</td>
                  </tr>
                </tbody>
              )
            }
          </Table>
        </div>
      </div>
    </div>
  )
}
