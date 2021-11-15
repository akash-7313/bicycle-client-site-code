import React from 'react';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Products from '../Products/Products';
import ShowReview from "../../Home/ShowReview/ShowReview";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Blogs></Blogs>
            <ShowReview></ShowReview>
        </div>
    );
};

export default Home;