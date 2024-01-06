import React from 'react';
import '../Category/Category.css'
import { FaFileInvoiceDollar } from "react-icons/fa";
const SingleCategory = ({category}) => {
    // console.log(category);
    return (
        <div className='mt-10 meow text-left '>
             <div>
            <div className="card px-3 pt-5 meow bg-slate-200 mx-auto text-left" style={{width: '18rem',zIndex: 0, position: 'relative' } } >
    <img src={category.logo} className="card-img-top h-16 w-16" alt="..."/>
  <div className="card-body meow">
    <h5 className="card-title font-bold">{category.category_name}</h5>
    <p className="card-text">{category.availability}</p>
    
  </div>
</div>
             </div>
        </div>
    );
};

export default SingleCategory;