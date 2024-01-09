import React from 'react';
import { Link } from 'react-router-dom';
import { FaMoneyBill1Wave } from "react-icons/fa6";
const SingleFeature = ({feature}) => {
    console.log(feature);
    return (
        <div>
           
  <div className="mt-6">
    <div className="card py-3 px-4" style={{zIndex: 0, position: 'relative' } }>
      <div className="card-body">
        <img className='card-img-top h-16 w-16' src={feature.logo} alt="" srcset="" />
        <h5 className="card-title mt-3 font-bold">{feature.job_title}</h5>
        <p className="card-text mt-3">{feature.company_name}</p>
        <div className='flex'>
            <p>{feature.job_type}</p>
            <p className='ml-3'>{feature.remote_or_onsite}</p>
        </div>
         <div className='flex align-middle'>
         <FaMoneyBill1Wave className='mr-2 mt-1' /> Salary: {feature.salary}
         </div>
        <Link to={`/jobs/${feature.id}`} className="btn btn-primary mt-3">View Details</Link>
      </div>
    </div>
  </div>
 

            
        </div>
    );
};

export default SingleFeature;