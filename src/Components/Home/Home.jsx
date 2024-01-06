import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import FeaturedJobs from '../JobsatHomepage/FeaturedJobs';


const Home = () => {
 

    return (
        <div>
            <h1>This is home</h1>
            <Banner></Banner>
            <Category></Category>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;