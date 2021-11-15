import React, { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import SingleCollection from "../SingleCollection/SingleCollection";

const OurCollection = () => {
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

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2 className="text-secondary border-bottom border-1 border-primary w-25 mx-auto">
          Our Featured Products
        </h2>
        <p className="text-muted">
          Bicycle is one of the best vehicles in the replace for <br /> its
          various aspects. The bicycle is <br /> made of two wheels, which
          consisting two tiers and tubes an iron frame.
        </p>
      </div>
      <Row xs={1} md={3} className="g-4 py-4 px-3">
        {collection.map((product, index) => (
          <SingleCollection
            key={product._id}
            product={product}
          ></SingleCollection>
        ))}
      </Row>
    </div>
  );
};

export default OurCollection;

