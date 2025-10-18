import React from 'react';
import { NavLink } from 'react-router';
import user from '../assets/user.png'
const Navbar = () => {
  return (
    <div className='flex justify-between items-center'>
      <div className=''></div>
      <div className='flex gap-x-5 text-accent'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/aboutus'>About Us</NavLink>
        <NavLink to='/career'>Career</NavLink>
      </div>
      <div className='flex gap-x-5'>
        <img src={user} alt="" />
        <button className="btn btn-primary px-10">Login</button>
      </div>
    </div>
  );
};

export default Navbar;