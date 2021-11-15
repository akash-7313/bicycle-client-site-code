import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleProduct from "../SingleProduct/SingleProduct";

const Products = () => {
  const [product, setProduct] = useState([]);
  const [isLoadingData, setIsLoadingData] = useState(true);

  useEffect(() => {
    setIsLoadingData(true);
    fetch("http://localhost:5000/allProducts")
      .then((res) => res.json())
      .then((data) => {
        // console.log('sliced', data.slice(0,6));
        setProduct(data.slice(0, 6));
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

  return (
    <div className="container my-5">
      <div className="pt-5 text-center">
        <h2 className="text-secondary">Latest Products</h2>
        <p className="text-muted">
          Bicycle is one of the best vehicles in the replace for <br /> its various
          aspects. The bicycle is <br /> made of two wheels, which consisting two tiers
          and tubes an iron frame. 
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 py-4 px-3">
        {product.map((pd, index) => (
          <SingleProduct key={pd._id} pd={pd}></SingleProduct>
        ))}
      </Row>
    </div>
  );
};

export default Products;
