import React from 'react';
import { Link, NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className='w-1/3'></div>
      <div className='flex gap-x-5 text-accent w-2/5'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-x-5'>
        <img src={user} alt="" />
        <Link to='/auth/login' className="btn btn-primary px-10">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;