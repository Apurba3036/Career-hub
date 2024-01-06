
import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react';
import Header from './Components/Header/Header'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer/Footer';

function App() {
 

  return (
    <>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
