import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { MdAccountCircle } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
const Header = () => {
    const [isMenuopen, setMenuOpen]=useState(false);
    const toggole=()=>{
         setMenuOpen(!isMenuopen);
    }
    return (
        <div className='bg-slate-400 fixed top-0 left-0 right-0' style={{zIndex:1}}>
            <nav className='px-4 py-4 max-w-7xl mx-auto flex justify-between'>
                <a href="/" className='mr-2 text-lg font-bold '>Career<span className=' text-orange-500'>Hub</span></a>
                <div className='md:flex gap-12 text-lg hidden'>
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Jobs">Applied jobs</Link>
                <Link to="/Statistics">Statistics</Link>
                <Link to="/blogs">Blog</Link>
                </div>
                 <div className='lg:flex gap-2 items-center hidden'>
                 <Link to='/Jobs'><button className='btn hover:text-blue-700 transition-all duration-200 ease-in'>Start Applying</button></Link>
                 <a href="" className='hover:text-orange-600'><MdAccountCircle className='w-10 h-10 ml-5'></MdAccountCircle></a>
                 </div>
                 <div className='md:hidden'>
                    <button onClick={toggole} className='cursor-pointer'>
                        {
                            isMenuopen?<RxCross2 className='w-5 h-5' />:<GiHamburgerMenu className='w-5 h-5'></GiHamburgerMenu>
                        }
                        </button>
                 </div>

            </nav>

            <div>
            <ul className={`md:hidden gap-12 text-lg space-y-4 block px-4 py-6 mt-14  bg-white ${isMenuopen?"fixed left-0 top-1 w-full transition-all ease-out duration-500":"hidden"}`}>
                <li onClick={toggole}><Link to="/">Home</Link></li>
                <li onClick={toggole}> <Link to="/About">About</Link></li>
                <li onClick={toggole}><Link to="/Jobs">Applied jobs</Link></li>
                <li onClick={toggole}><Link to="/Statistics">Statistics</Link></li>
                <li onClick={toggole}><Link to="/blogs">Blog</Link></li>
            </ul>
            </div>
            
        </div>
    );
};

export default Header;