import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home from './Components/Home/Home.jsx';
import About from './Components/About Us/About.jsx';
import Jobs from './Components/Jobs/Jobs.jsx';
import Blogs from './Components/Blogs/Blogs.jsx';
import Statistics from './Components/Statistics/Statistics.jsx';
import FeaturedJobs from './Components/JobsatHomepage/FeaturedJobs.jsx';
import Category from './Components/Category/Category.jsx';
import Details from './Components/Jobs/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children:[{
      path: "/",
      element:<Home></Home>,
     loader:()=>fetch(`categories.json`),
    
       
    },
    {
      path:"/category",
      element:<Category></Category>,
       loader:()=>fetch(`categories.json`),
    },
    {
      path:"/features",
      element: <FeaturedJobs></FeaturedJobs>,
   
    
    }
  ,
  {
    path:"/About",
    element:<About></About>,
    loader:()=>fetch(`test.json`)
  },
  {
    path:"/Jobs/:id",
    element:<Details></Details>,
  


  },
{
   path:"/Jobs",
   element:<Jobs></Jobs>,
   loader:()=>fetch(`jobs.json`)
},
{
  path:"/blogs",
  element:<Blogs></Blogs>

},
{
  path:"/Statistics",
  element:<Statistics></Statistics>
}
]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
         <RouterProvider router={router} />
  </React.StrictMode>,
)
