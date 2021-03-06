import React, { useEffect, useState } from "react";
import { Table, Button, Spinner } from "react-bootstrap";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  const deleteStyle = {
    cursor: "pointer",
  };

  useEffect(() => {
    setIsLoadingData(true);
    fetch("https://peaceful-hollows-85818.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((result) => {
        setIsLoadingData(false);
        setOrders(result);
      });
  }, []);

  if (isLoadingData) {
    return (
      <div className="text-center my-5 py-5">
        <Spinner className="my-5" animation="border" variant="primary" />
      </div>
    );
  }

  // delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete order?");
    if (proceed) {
      const url = `https://peaceful-hollows-85818.herokuapp.com/myOrders/${id}`;
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

  // update status
  const handleUpdateOrderStatus = (id) => {
    // console.log(id);
    const data = {};
    data.status = "shipped";
    // console.log(data);

    fetch(`https://peaceful-hollows-85818.herokuapp.com/update/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);
        if (result.modifiedCount > 0) {
          alert("Order Shipped Successfully");
        }
      });
  };

  // console.log('orders',orders);

  return (
    <div className="container py-5">
      <div className="text-center">
        <h3 className="d-inline-block border-bottom border-3">
          Manage All Orders
        </h3>
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
              <td>{order?.bicycle}</td>
              <td>${order?.price}k</td>
              <td>{order?.name}</td>
              <td>{order?.address}</td>
              <td>{order?.phone}</td>

              <td onClick={() => handleUpdateOrderStatus(order._id)}>
                <Button variant="outline-dark" size="sm" className="py-0">
                  {order?.status}
                </Button>
              </td>

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

export default ManageAllOrder;
