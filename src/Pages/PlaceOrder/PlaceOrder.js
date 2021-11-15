import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const PlaceOrder = () => {
  const { productId } = useParams();
  const [singleProduct, setSingleProduct] = useState({});
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const url = `http://localhost:5000/allProducts/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => setSingleProduct(result));
  }, [productId]);


  const onSubmit = (data) => {
    data.status = "pending";
    console.log(data);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result);

        if (result.insertedId) {
          alert("Order processed Successfully");
          reset();
        }
      });
  };

  return (
    <div className="container py-5">
      <h2 className="text-center text-secondary">Place your Order here</h2>
      <Row xs={1} md={2} className="g-4 container mx-auto mt-3">
        <Col>
          <Card className="border-0 shadow">
            <Card.Img
              variant="top"
              className="img-fluid p-5"
              src={singleProduct?.img}
            />
            <Card.Body>
              <Card.Title>{singleProduct?.bicycleName}</Card.Title>
              <Card.Text className="text-success">
                Tour Cost: ${singleProduct?.price}k
              </Card.Text>
              <Card.Text className="text-dark">
                Rating: 4.5 , Rated by: 6.5k riders
              </Card.Text>
              <Card.Text className="text-muted">
                {singleProduct?.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <div>
            <h5 className="text-center">Order Info</h5>
            <form onSubmit={handleSubmit(onSubmit)} className="text-center">
              <input
                className="p-2 m-2"
                defaultValue={user.displayName}
                type="text"
                {...register("name", { required: true })}
                required
                placeholder="Name"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={user.email}
                type="email"
                {...register("email", { required: true })}
                required
                placeholder="Email"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={singleProduct?.bicycleName}
                type="text"
                {...register("bicycle", { required: true })}
                required
                placeholder="Bicycle Name"
              />
              <br />
              <input
                className="p-2 m-2"
                defaultValue={singleProduct?.price}
                type="number"
                {...register("price", { required: true })}
                required
                placeholder="Price"
              />
              <br />
              <input
                className="p-2 m-2"
                type="text"
                {...register("address")}
                required
                placeholder="Address"
              />
              <br />
              <input
                className="p-2 m-2"
                type="text"
                {...register("phone")}
                required
                placeholder="Phone Number"
              />
              {errors.exampleRequired && <span>This field is required</span>}
              <br />
              <input
                className="px-5 mt-3 btn btn-sm btn-primary"
                type="submit"
              />
            </form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PlaceOrder;
