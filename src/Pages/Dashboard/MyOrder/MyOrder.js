import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../Hooks/useAuth";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  // console.log(user.email);
  // console.log(email);

  const deleteStyle = {
    cursor: "pointer",
  };

  useEffect(() => {
    fetch(`http://localhost:5000/myOrders/${email}`)
      .then((res) => res.json())
      .then((result) => setOrders(result));
  }, [email]);

  // delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete order?");
    if (proceed) {
      const url = `http://localhost:5000/myOrders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("order deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="container py-3">
      <div className="text-center">
        <h3 className="d-inline-block border-bottom border-3">My orders</h3>
      </div>
      <Table responsive className="my-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Bicycle</th>
            <th>Price</th>
            <th>Buyer</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        {orders?.map((order, index) => (
          <tbody key={order?._id}>
            <tr>
              <td>{index + 1} </td>
              <td> {order?.bicycle}</td>
              <td> ${order?.price}k</td>
              <td> {order?.name}</td>
              <td> {order?.address}</td>
              <td> {order?.phone}</td>
              <td> {order?.status}</td>

              <td onClick={() => handleDeleteOrder(order._id)}>
                <i className="far fa-trash-alt" style={deleteStyle}></i>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrder;
