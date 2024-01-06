import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import SingleCategory from './SingleCategory';



const Category = () => {
     const categories=useLoaderData();
   //  console.log(categories)
    return (
        <div className='mt-20 text-center p-10'>
             <div>
                <h1 className='title font-medium'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                
             </div>
             <div className='meow md:flex justify-between text-left'>
                {
                     categories.map(category=><SingleCategory  key={category.id} category={category}></SingleCategory>)
                }
             </div>
            
         
           </div>
    );
};

export default Category;