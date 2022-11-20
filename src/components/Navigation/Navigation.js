import React, { useState } from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Navigation = () => {
    const [open, setOpen] = useState(false);

    return (
        // Nav Section
        <section className='bg-[#172652] text-[#ffffff] font-semibold'>
            {/* Toggle */}
            <div onClick={() => setOpen(!open)} className='text-2xl text-left pl-6 py-3 md:hidden '>
                {
                    open ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />
                }
            </div>

            {/* NavBar */}
            <nav className={`flex md:items-center md:justify-between flex-col md:flex-row px-6 py-3 bg-[#172652] text-[#ffffff] md:static absolute w-[100%] duration-500 ease-in-out ${open ? 'top-10' : 'top-[-250px]'}`}>
                {/* Logo */}
                <div className='hidden md:flex items-center'>
                    <img src={Logo} alt=''></img>
                    <p className='text-3xl ml-3'>Memory Bank</p>
                </div>

                {/* Nav Links */}
                <div className='flex items-center flex-col md:flex-row'>
                    <NavLink to='/' className={`mx-6 py-2 px-4 hover:text-[#0072ce] rounded ${({ isActive }) => isActive ? 'active' : undefined}`}>Topics</NavLink>
                    <NavLink to='/statistics' className='mx-6 py-2 px-4 hover:text-[#0072ce] rounded'>Statistics</NavLink>
                    <NavLink to='/blog' className='mx-6 py-2 px-4 hover:text-[#0072ce] rounded'>Blog</NavLink>
                    <NavLink to='/about' className='mx-6 py-2 px-4 hover:text-[#0072ce] rounded'>About</NavLink>
                </div>
            </nav >
        </section>
    );
};

export default Navigation;