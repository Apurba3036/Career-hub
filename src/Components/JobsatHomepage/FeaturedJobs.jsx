import React from 'react';

import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import SingleFeature from './SingleFeature';

const FeaturedJobs = () => {
    const [featues,setfetures]=useState([]);
  
    useEffect(() => {
        fetch('https://apurba3036.github.io/apitest/test.json')
        .then(response => response.json())
        .then(data => setfetures(data))
        .catch(error => console.error('Error fetching JSON:', error));
      }, []);
  return (
    <div className='mt-20 text-center px-2 md:p-10'>
      <div>
        <h1 className='title font-medium'>Featured Jobs</h1>
        <p>Explore thousands of job opportunities with all the information you need.It's your future</p>
      </div>
      <div className='text-left p-5 md:flex md:grid md:grid-cols-2 gap-4'>
        {
            featues.slice(0, 4).map((feature) => (
                <SingleFeature key={feature.id} feature={feature}></SingleFeature>
              ))
        }
      </div>
      <div>
        <Link to='/Jobs' className="btn btn-primary mt-3">See All Jobs</Link>
      </div>
    </div>
  );
};



export default FeaturedJobs;