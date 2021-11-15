import React, { useEffect, useState } from "react";
import { Row, Spinner, Col, Card } from "react-bootstrap";


const ManageProducts = () => {
  const [collection, setCollection] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    setIsLoadingData(true);
    fetch("https://peaceful-hollows-85818.herokuapp.com/allProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setCollection(data);
        setIsLoadingData(false);
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
      const url = `https://peaceful-hollows-85818.herokuapp.com/product/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.deletedCount > 0) {
            alert("order deleted successfully");
            const remainingOrders = collection.filter(
              (pd) => pd._id !== id
            );
            setCollection(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <h2 className="mt-3 text-center">All products details</h2>
      <Row xs={2} md={4} className="g-4 pt-4 px-3">
        {collection.map((product, index) => (
          <Col key={product?._id} className="p-2">
            <Card className="shadow h-100 border-0">
              <Card.Img
                className="img-fluid p-3"
                variant="top"
                src={product?.img}
              />
              <Card.Body>
                <Card.Title>
                  <b className="text-dark fs-6">{product?.bicycleName}</b>
                </Card.Title>
                <Card.Text>
                  <small className="text-muted">
                    {product?.description.slice(0, 10)}...
                  </small>
                </Card.Text>
              </Card.Body>

              <div className="d-flex justify-content-between align-items-center text-muted px-3 mb-2">
                <p className="text-secondary">
                  <small className="fw-bold">Price: ${product?.price}k </small>
                  <small className="text-danger">
                    <del>$200k</del>
                  </small>
                </p>
              </div>
              <button
                onClick={() => handleDeleteOrder(product._id)}
                className="px-3 mb-2 mt-3 btn btn-sm btn-secondary"
                type="submit"
              >
                Remove product
              </button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ManageProducts;
