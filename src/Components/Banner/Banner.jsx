import React from 'react';
import './Banner.css'
import { Link } from 'react-router-dom';
import {FaArrowRight} from "react-icons/fa6"
const Banner = () => {
    return (
        <div className='banner px-4 py-32 mx-auto md:flex justify-between'>
            <div className='title md:px-32 w-full leading-tight'>
              <h2 className='leading-tight'>One Step <br />Closer To Your</h2>
              <h2 className='text-blue-700 leading-tight'>Dream Job</h2>
              <div className='text-sm font-light'>
              <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
              <div className='mt-6'>
                  <Link to='/About' className='font-medium hover:text-blue-600 inline-flex items-center'>Learn more <FaArrowRight className='mt-1 ml-2'></FaArrowRight> </Link>
              </div>
              </div>
            
            </div>

            <div className=''>

                <img className='h-30 w-full mx-auto p-3 'src="https://static.vecteezy.com/system/resources/previews/020/962/986/original/software-engineer-graphic-clipart-design-free-png.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;