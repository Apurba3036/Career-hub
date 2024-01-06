import React from 'react';
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const SingleJob = ({a}) => {
    console.log(a);
    return (
        <div>
            <div className="card mt-5">
  <div className="md:flex align-middle justify-center g-0 py-4 px-3">
    <div className="col-md-4 p-3">
      <img src={a.logo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-4">
      <div className="card-body md:pt-24">
        <h5 className="card-title">{a.job_title}</h5>
        <p className="card-text">{a.company_name}</p>
        <div className='flex align-middle'>
         <FaMoneyBill1Wave className='mr-2 mt-1' /> Salary: {a.salary}
         </div>
        <p className="card-text"><small className="text-body-secondary">{a.location}</small></p>
      </div>
    </div>
    <div className='md:mt-24'>
    <Link to='/Details' className="btn btn-primary mt-3 ">View details</Link>
  </div>
  </div>
 
</div>
        </div>
    );
};

export default SingleJob;