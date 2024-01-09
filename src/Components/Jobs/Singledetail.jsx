import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
const Singledetail = ({feature}) => {
    const[find,setFind]=useState([]);
    // const idfind=useParams();
    // console.log(idfind);
    
   
    return (
        <div >
           <h3 className='title '>
             {feature.job_title}
           </h3>
           <p className='font-bold'>Company name:{feature.company_name}</p>
           <div className='flex justify-center my-5'>
           <img  className='h-50 w-50'src={feature.logo}alt="" />
           </div>
          <div className='text-justify'>
          <p><span className='font-bold'>Description:</span>{feature.job_description}</p>
          <p><span className='font-bold'>Experience: </span>{feature.educational_requirements}</p>
          <p><span className='font-bold'>Responsibility: </span>{feature.job_responsibility}</p>
          <p><span className='font-bold'>Phone: </span>{feature.contact_information.phone}</p>
          <p><span className='font-bold'>E-mail: </span>{feature.contact_information.email}</p>
          <p><span className='font-bold'>Address: </span>{feature.contact_information.address}</p>
          <p><span className='font-bold'>Salary: </span>{feature.salary}</p>
          </div>
        </div>
    );
};

export default Singledetail;