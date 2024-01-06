import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleJob from './SingleJob';

const Jobs = () => {
   const d=useLoaderData();
//    console.log(d);
    return (
        <div className='py-32'>
        <div className='text-center'>
          <h1 className='title font-medium'>All Jobs</h1>
          <p>Explore thousands of job opportunities with all the information you need.It's your future</p>
        </div>
            <div className='px-14'>
                {
                    d.map(a=><SingleJob key={a.id} a={a}></SingleJob>)
                }
            </div>
        </div>
    );
};

export default Jobs;